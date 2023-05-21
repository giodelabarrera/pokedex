import React from 'react'

import './index.scss'

const baseClass = 'pk-ScreenPokemonList-noSearchResults'

export default function NoSearchResults() {
  return (
    <div className={baseClass}>
      <h2 className={`${baseClass}-title`}>No Pokémon matched your search!</h2>
      <p>Try searching for part of your number or name</p>
    </div>
  )
}
