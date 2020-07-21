import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {useDomain} from '../context/domainProvider'

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
      {pokemonList.map(({id, number, name, imageUrl}) => (
        <div key={id}>
          <Link to={`/${id}`}>
            <img src={imageUrl} alt={name} />
          </Link>
          <h4>{name}</h4>
          <span>{number}</span>
        </div>
      ))}
    </div>
  )
}
