import React, {useRef, useCallback} from 'react'
import {Link} from 'react-router-dom'
import {useQuery} from 'react-query'

import {useDomain} from '../../context/domain'
import PokemonCard from '../../components/pokemon/card'

import useQueryParam, {StringParam} from '../../hooks/useQueryParam'
import useIntersection from '../../hooks/useIntersection'

import './index.scss'

function usePokemonList({query, limit}) {
  const domain = useDomain()

  const fetchGetPokemonList = useCallback(
    (key, params) =>
      domain.get('pokemon__get_pokemon_list_use_case').execute(params),
    [domain]
  )

  const {error, data, status} = useQuery(
    ['get_pokemon_list', {query, limit}],
    fetchGetPokemonList
  )

  return {error, data, status}
}

function PokemonListScreen() {
  const [query = ''] = useQueryParam('query', StringParam)
  const limit = 24

  const {error, data, status} = usePokemonList({query, limit})

  const loadMoreRef = useRef()
  const isIntersecting = useIntersection({
    target: status === 'success' ? loadMoreRef : null
  })

  return (
    <div className="pk-PokemonList">
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div className="pk-PokemonList-results">
            {data.map(({id, number, name, imageUrl, slug}) => (
              <div className="pk-PokemonList-item" key={id}>
                <PokemonCard
                  id={id}
                  number={number}
                  name={name}
                  imageUrl={imageUrl}
                  slug={slug}
                  link={makePokemonDetailLink(slug)}
                />
              </div>
            ))}
          </div>
          <div ref={loadMoreRef} className="loadMore">
            <h1>Load more</h1>
            <span>{isIntersecting ? 'Fully in view' : 'Obscured'}</span>
          </div>
        </>
      )}
    </div>
  )
}

function makePokemonDetailLink(slug) {
  return function (props) {
    return <Link {...props} to={`/${slug}`} />
  }
}

export default PokemonListScreen
