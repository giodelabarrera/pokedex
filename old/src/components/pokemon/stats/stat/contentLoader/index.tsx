import React from 'react'

import {LinearProgressContentLoader} from '../../linearProgress'

import './index.scss'

const baseClass = 'pk-PokemonStats-stat-contentLoader'

export default function StatContentLoader() {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-nameContainer`}>
        <div className={`${baseClass}-name`}></div>
      </div>
      <div className={`${baseClass}-valueContainer`}>
        <div className={`${baseClass}-value`}></div>
      </div>
      <div className={`${baseClass}-progressContainer`}>
        <LinearProgressContentLoader />
      </div>
    </div>
  )
}
