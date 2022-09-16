import React from 'react'

import Stat from './stat'

import './index.scss'

const baseClass = 'pk-PokemonStats'

export default function PokemonStats({stats}) {
  return (
    <div className={baseClass}>
      <ul className={`${baseClass}-list`}>
        <li className={`${baseClass}-item`}>
          <Stat name="HP" value={stats.hp} />
        </li>
        <li className={`${baseClass}-item`}>
          <Stat name="ATK" value={stats.attack} />
        </li>
        <li className={`${baseClass}-item`}>
          <Stat name="DEF" value={stats.defense} />
        </li>
        <li className={`${baseClass}-item`}>
          <Stat name="SATK" value={stats.special_attack} />
        </li>
        <li className={`${baseClass}-item`}>
          <Stat name="SDEF" value={stats.special_defense} />
        </li>
        <li className={`${baseClass}-item`}>
          <Stat name="SPD" value={stats.speed} />
        </li>
      </ul>
    </div>
  )
}
