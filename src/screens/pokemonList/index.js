import React, {useRef, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {useDomain} from 'context/domain'
import useQueryParam, {StringParam} from 'hooks/useQueryParam'
import useIntersection from 'hooks/useIntersection'

import PokemonList from 'components/pokemon/list'
import PokemonCard from 'components/pokemon/card'

const LIMIT = 48

const baseClass = 'pk-PokemonListScreen'

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
    <div className={baseClass}>
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <PokemonList pokemonList={data}>
            {({id, number, name, imageUrl, slug}) => (
              <PokemonCard
                id={id}
                number={number}
                name={name}
                imageUrl={imageUrl}
                slug={slug}
                link={makePokemonDetailLink(slug)}
              />
            )}
          </PokemonList>
          {total > data.length && <div ref={loadMoreRef} />}
        </>
      )}
    </div>
  )
}

function makePokemonDetailLink(slug) {
  return function (props) {
    return <Link {...props} to={`/p/${slug}`} />
  }
}

export default PokemonListScreen
