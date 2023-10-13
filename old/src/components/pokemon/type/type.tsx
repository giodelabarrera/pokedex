import React from 'react'

import './index.scss'

const baseClass = 'pk-PokemonType'

export default function PokemonType({type, size = 'medium'}) {
  return (
    <div className={`${baseClass} ${baseClass}--${size} u-${type}`}>{type}</div>
  )
}
