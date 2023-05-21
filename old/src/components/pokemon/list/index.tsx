import React from 'react'

import './index.scss'

const baseClass = 'pk-PokemonList'

export default function PokemonList({pokemonList, children}) {
  return (
    <div className={baseClass}>
      {pokemonList.map(pokemon => (
        <div className={`${baseClass}-item`} key={pokemon.id}>
          {children(pokemon)}
        </div>
      ))}
    </div>
  )
}
