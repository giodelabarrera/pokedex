import React from 'react'

import './index.scss'

const baseClass = 'pk-PokemonTypes'

export default function PokemonTypes({types, children}) {
  return (
    <div className={baseClass}>
      {types.map(type => (
        <React.Fragment key={type}>
          <div className={`${baseClass}-item`}>{children(type)}</div>
        </React.Fragment>
      ))}
    </div>
  )
}
