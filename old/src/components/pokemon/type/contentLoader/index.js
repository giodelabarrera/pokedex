import React from 'react'

import './index.scss'

const baseClass = 'pk-PokemonType-contentLoader'

export default function PokemonTypeContentLoader({size = 'medium'}) {
  return <div className={`${baseClass} ${baseClass}--${size}`}></div>
}
