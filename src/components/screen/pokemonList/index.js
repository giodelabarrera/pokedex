import React, {useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom'

import useQueryParam, {StringParam} from 'hooks/useQueryParam'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import useInfiniteSearchPokemonQuery from 'components/pokemon/useInfiniteSearchPokemonQuery'

import PokemonList from 'components/pokemon/list'
import PokemonCard from 'components/pokemon/card'
import FilterSort, {filterSortTypes} from 'components/filter/sort'
import Spinner from 'components/feedback/spinner'
import ErrorFeedback from 'components/feedback/error'

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
  const [offset, setOffset] = useState(0)
  const loadMoreRef = useRef()

  const {data, isLoading, isFetchingMore, error, canLoadMore} =
    useInfiniteSearchPokemonQuery({
      query,
      limit: LIMIT,
      sort,
      offset
    })

  const entry = useIntersectionObserver(loadMoreRef, {
    enabled: canLoadMore,
    rootMargin: '200px'
  })
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (isVisible) setOffset(prevOffset => prevOffset + 1)
  }, [isVisible])

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
          data && (
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
                  {canLoadMore && isFetchingMore && (
                    <div className={`${baseClass}-spinnerContainer`}>
                      <Spinner />
                    </div>
                  )}
                </>
              ) : (
                <NoSearchResults />
              )}
            </>
          )
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
