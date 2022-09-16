import React, {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'

import useQueryParam, {StringParam} from '../../../hooks/useQueryParam'
import useIntersection from '../../../hooks/useIntersection'

import PokemonList from '../../../components/pokemon/list'
import PokemonCard from '../../../components/pokemon/card'
import usePokemonList from '../../../components/pokemon/usePokemonList'
import FilterSort, {filterSortTypes} from '../../../components/filter/sort'
import Spinner from '../../../components/feedback/spinner'
import ErrorFeedback from '../../../components/feedback/error'

import NoSearchResults from './noSearchResults'

import './index.scss'

const LIMIT = 24

const baseClass = 'pk-ScreenPokemonList'

function ScreenPokemonList() {
  const [query = ''] = useQueryParam('query', StringParam)
  const [sort = filterSortTypes['lowestNumber'], setSort] = useQueryParam(
    'sort',
    StringParam
  )

  const {canLoadMore, data, error, isLoading, isLoadingMore, setOffset} =
    usePokemonList({query, sort, limit: LIMIT})

  const loadMoreRef = useRef()
  const isIntersecting = useIntersection({
    target: isLoading ? null : loadMoreRef,
    rootMargin: '200px'
  })

  useEffect(() => {
    if (isIntersecting) setOffset(prevOffset => prevOffset + 1)
  }, [isIntersecting, setOffset])

  function handleFilterSortChange(value) {
    setSort(value)
  }

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-filterBar`}>
        <FilterSort value={sort} onChange={handleFilterSortChange} />
      </div>
      <div className={`${baseClass}-content`}>
        {isLoading ? (
          <div className={`${baseClass}-spinnerContainer`}>
            <Spinner />
          </div>
        ) : error ? (
          <ErrorFeedback error={error} />
        ) : (
          <>
            {data.total ? (
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
            ) : (
              <NoSearchResults />
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

export default ScreenPokemonList
