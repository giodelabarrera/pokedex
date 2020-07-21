import React, {useEffect, useState} from 'react'

import {useDomain} from '../context/domainProvider'

const IMAGE_BASE_URL =
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail'

export default function PokemonListScreen() {
  const domain = useDomain()

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    domain
      .get('pokemon__get_pokemon_list_use_case')
      .execute()
      .then(setPokemonList)
  }, [domain])

  return (
    <div className="pk-PokemonList">
      {pokemonList.map(({id, number, name, types, stats}) => (
        <div key={id}>
          <img src={`${IMAGE_BASE_URL}/${number}.png`} alt={name} />
          <h4>{name}</h4>
          <span>{number}</span>
        </div>
      ))}
    </div>
  )
}
