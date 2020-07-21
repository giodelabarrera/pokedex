import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'
import {useDomain} from '../context/domainProvider'

export default function PokemonDetailScreen() {
  const domain = useDomain()
  const {pokemonIdOrName} = useParams()

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    domain
      .get('pokemon__get_pokemon_use_case')
      .execute({idOrName: pokemonIdOrName})
      .then(setPokemon)
  }, [domain, pokemonIdOrName])

  return (
    <>
      <h1>Pokemon detail</h1>
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    </>
  )
}
