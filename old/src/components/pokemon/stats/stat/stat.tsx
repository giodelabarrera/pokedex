import React from 'react'

import LinearProgress from '../linearProgress'

import './index.scss'

const baseClass = 'pk-PokemonStats-stat'

function Stat({name, value}) {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-nameContainer`}>
        <div className={`${baseClass}-name`}>{name}</div>
      </div>
      <div className={`${baseClass}-valueContainer`}>
        <div className={`${baseClass}-value`}>
          <span>{value}</span>
        </div>
      </div>
      <div className={`${baseClass}-progressContainer`}>
        <LinearProgress value={value} />
      </div>
    </div>
  )
}

export default Stat
