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
  const [isNextLoading, setIsNextLoading] = useState(true)
  const [nextError, setNextError] = useState(null)

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
    setIsNextLoading(true)
    domain
      .get('pokemon__get_pokemon_list_use_case')
      .execute({query, offset, limit: LIMIT, sort})
      .then(data => {
        setData(prevData => ({
          ...data,
          results: prevData.results.concat(data.results)
        }))
        setIsNextLoading(false)
      })
      .catch(error => setNextError(error))
  }, [domain, offset, query, sort])

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

  // function renderSuccessContent() {
  //   const {total, results} = data
  //   return (
  //     <>
  //       <PokemonList pokemonList={results}>
  //         {({id, number, name, imageUrl, slug, types}) => (
  //           <PokemonCard
  //             number={number}
  //             name={name}
  //             imageUrl={imageUrl}
  //             types={types}
  //             link={makePokemonDetailLink(slug)}
  //           />
  //         )}
  //       </PokemonList>
  //       {total > results.length && <div ref={loadMoreRef} />}
  //     </>
  //   )
  // }

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
          <div>Error... </div>
        ) : (
          <>
            <PokemonList pokemonList={data.results}>
              {({id, number, name, imageUrl, slug, types}) => (
                <PokemonCard
                  number={number}
                  name={name}
                  imageUrl={imageUrl}
                  types={types}
                  link={makePokemonDetailLink(slug)}
                />
              )}
            </PokemonList>
            {data.total > data.results.length && <div ref={loadMoreRef} />}
          </>
        )}
        {isNextLoading ? (
          <div className={`${baseClass}-spinnerContainer`}>
            <Spinner />
          </div>
        ) : nextError ? (
          <div>Error... </div>
        ) : (
          <>
            <PokemonList pokemonList={data.results}>
              {({id, number, name, imageUrl, slug, types}) => (
                <PokemonCard
                  number={number}
                  name={name}
                  imageUrl={imageUrl}
                  types={types}
                  link={makePokemonDetailLink(slug)}
                />
              )}
            </PokemonList>
            {data.total > data.results.length && <div ref={loadMoreRef} />}
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
