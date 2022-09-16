import React from 'react'

import {StatContentLoader} from '../stat'

import './index.scss'

const baseClass = 'pk-PokemonStats-contentLoader'

export default function PokemonStatsContentLoader() {
  return (
    <div className={baseClass}>
      <ul className={`${baseClass}-list`}>
        <li className={`${baseClass}-item`}>
          <StatContentLoader />
        </li>
        <li className={`${baseClass}-item`}>
          <StatContentLoader />
        </li>
        <li className={`${baseClass}-item`}>
          <StatContentLoader />
        </li>
        <li className={`${baseClass}-item`}>
          <StatContentLoader />
        </li>
        <li className={`${baseClass}-item`}>
          <StatContentLoader />
        </li>
        <li className={`${baseClass}-item`}>
          <StatContentLoader />
        </li>
      </ul>
    </div>
  )
}
