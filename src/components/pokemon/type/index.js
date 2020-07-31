import React from 'react'

import ContentLoader from './contentLoader'
import './index.scss'

const baseClass = 'pk-PokemonType'

function PokemonType({type, size = 'medium'}) {
  return (
    <div className={`${baseClass} ${baseClass}--${size} u-${type}`}>{type}</div>
  )
}

export default PokemonType
export {ContentLoader as PokemonTypeContentLoader}
