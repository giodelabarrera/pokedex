import React from 'react'

import {LinearProgressContentLoader} from '../../linearProgress'

import './index.scss'

const baseClass = 'pk-PokemonStats-stat-contentLoader'

export default function StatContentLoader() {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-name`}></div>
      <div className={`${baseClass}-value`}></div>
      <div className={`${baseClass}-progressContainer`}>
        <LinearProgressContentLoader />
      </div>
    </div>
  )
}
