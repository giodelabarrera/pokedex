import React, {useEffect, useState} from 'react'

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
    <>
      <h1>Pokemon list</h1>
      <pre>{JSON.stringify(pokemonList, null, 2)}</pre>
    </>
  )
}
