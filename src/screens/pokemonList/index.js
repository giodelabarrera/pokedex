import React, {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'

import {useDomain} from '../../context/domain'
import PokemonCard from '../../components/pokemon/card'

import './index.scss'
import useQueryParam, {StringParam} from '../../hooks/useQueryParam'
import useIntersection from '../../hooks/useIntersection'

function PokemonListScreen() {
  const domain = useDomain()

  const [query = ''] = useQueryParam('query', StringParam)

  const [pokemonList, setPokemonList] = useState([])

  const loadMoreRef = useRef(null)
  const intersection = useIntersection({target: loadMoreRef})

  useEffect(() => {
    domain
      .get('pokemon__get_pokemon_list_use_case')
      .execute({query, limit: 48})
      .then(setPokemonList)
  }, [domain, query])

  return (
    <div className="pk-PokemonList">
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
      <div ref={loadMoreRef} className="loadMore">
        <h1>Load more</h1>
        <span>
          {intersection && intersection.isIntersecting
            ? 'Fully in view'
            : 'Obscured'}
        </span>
      </div>
    </div>
  )
}

function makePokemonDetailLink(slug) {
  return function (props) {
    return <Link {...props} to={`/${slug}`} />
  }
}

export default PokemonListScreen
