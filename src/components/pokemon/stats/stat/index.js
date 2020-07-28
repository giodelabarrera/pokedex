import React from 'react'

import LinearProgress from '../linearProgress'

import './index.scss'

const baseClass = 'pk-PokemonStats-stat'

export default function Stat({name, value}) {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-name`}>{name}</div>
      <div className={`${baseClass}-value`}>
        <span>{value}</span>
      </div>
      <div className={`${baseClass}-progressContainer`}>
        <LinearProgress value={value} />
      </div>
    </div>
  )
}
