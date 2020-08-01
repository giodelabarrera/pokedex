import React, {useRef, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {useDomain} from 'context/domain'
import useQueryParam, {StringParam} from 'hooks/useQueryParam'
import useIntersection from 'hooks/useIntersection'

import PokemonList from 'components/pokemon/list'
import PokemonCard from 'components/pokemon/card'
import SortFilter, {sortFilterTypes} from 'components/filter/sort'
import Spinner from 'components/feedback/spinner'

import './index.scss'

const LIMIT = 12

const baseClass = 'pk-PokemonListScreen'

function PokemonListScreen() {
  const domain = useDomain()
  const [query = ''] = useQueryParam('query', StringParam)
  const [sort = sortFilterTypes['lowestNumber'], setSort] = useQueryParam(
    'sort',
    StringParam
  )
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    domain
      .get('pokemon__get_pokemon_list_use_case')
      .execute({query, limit: LIMIT, sort})
      .then(data => {
        setData(data)
        setOffset(0)
        setIsLoading(false)
      })
      .catch(error => setError(error))
  }, [domain, query, sort])

  useEffect(() => {
    if (offset === 0) return
    setIsLoadingMore(true)
    domain
      .get('pokemon__get_pokemon_list_use_case')
      .execute({query, offset, limit: LIMIT, sort})
      .then(data => {
        setData(prevData => ({
          ...data,
          results: prevData.results.concat(data.results)
        }))
        setIsLoadingMore(false)
      })
  }, [domain, offset, query, sort])

  let canLoadMore = false
  if (data) {
    canLoadMore = data.total > data.results.length
  }

  const loadMoreRef = useRef()
  const isIntersecting = useIntersection({
    target: isLoading ? null : loadMoreRef
  })

  useEffect(() => {
    if (isIntersecting) setOffset(prevOffset => prevOffset + 1)
  }, [isIntersecting])

  function handleSortFilterChange(value) {
    setSort(value)
  }

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-filterBar`}>
        <SortFilter value={sort} onChange={handleSortFilterChange} />
      </div>
      <div className={`${baseClass}-content`}>
        {isLoading ? (
          <div className={`${baseClass}-spinnerContainer`}>
            <Spinner />
          </div>
        ) : error ? (
          <div>{error.message}</div>
        ) : (
          <>
            <PokemonList pokemonList={data.results}>
              {({number, name, imageUrl, slug, types}) => (
                <PokemonCard
                  number={number}
                  name={name}
                  imageUrl={imageUrl}
                  types={types}
                  link={makePokemonDetailLink(slug)}
                />
              )}
            </PokemonList>
            {canLoadMore && <div ref={loadMoreRef} />}
            {canLoadMore && isLoadingMore && (
              <div className={`${baseClass}-spinnerContainer`}>
                <Spinner />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function makePokemonDetailLink(slug) {
  return function (props) {
    return <Link {...props} to={`/p/${slug}`} />
  }
}

export default PokemonListScreen
