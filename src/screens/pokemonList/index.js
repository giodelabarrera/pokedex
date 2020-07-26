import React, {useRef, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {useDomain} from '../../context/domain'
import PokemonCard from '../../components/pokemon/card'

import useQueryParam, {StringParam} from '../../hooks/useQueryParam'
import useIntersection from '../../hooks/useIntersection'

import './index.scss'

// function usePokemonList({query, limit}) {
//   const domain = useDomain()

//   const fetchGetPokemonList = useCallback(
//     (key, params) =>
//       domain.get('pokemon__get_pokemon_list_use_case').execute(params),
//     [domain]
//   )

//   const {error, data, status} = useQuery(
//     ['get_pokemon_list', {query, limit}],
//     fetchGetPokemonList
//   )

//   return {error, data, status}
// }

const LIMIT = 48

function PokemonListScreen() {
  const domain = useDomain()

  const [query = ''] = useQueryParam('query', StringParam)

  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    domain
      .get('pokemon__get_pokemon_list_use_case')
      .execute({query, limit: LIMIT})
      .then(({total, results}) => {
        setTotal(total)
        setData(results)
        setOffset(0)
        setIsLoading(false)
      })
  }, [domain, query])

  useEffect(() => {
    if (offset === 0) return
    domain
      .get('pokemon__get_pokemon_list_use_case')
      .execute({query, offset, limit: LIMIT})
      .then(({total, results}) => {
        setTotal(total)
        setData(prevData => prevData.concat(results))
      })
  }, [domain, offset, query])

  const loadMoreRef = useRef()
  const isIntersecting = useIntersection({
    target: isLoading ? null : loadMoreRef
  })

  useEffect(() => {
    if (isIntersecting) {
      setOffset(prevOffset => prevOffset + 1)
    }
  }, [isIntersecting])

  return (
    <div className="pk-PokemonList">
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <PokemonList pokemonList={data} />
          {total > data.length && (
            <div ref={loadMoreRef}>
              <h5>Load more</h5>
              <span>{isIntersecting ? 'Fully in view' : 'Obscured'}</span>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function PokemonList({pokemonList}) {
  return (
    <div className="pk-PokemonList-results">
      {pokemonList.map(({id, number, name, imageUrl, slug}) => (
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
  )
}

function makePokemonDetailLink(slug) {
  return function (props) {
    return <Link {...props} to={`/${slug}`} />
  }
}

export default PokemonListScreen
