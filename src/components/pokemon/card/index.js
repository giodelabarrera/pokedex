import React from 'react'

import PokemonType from 'components/pokemon/type'

import './index.scss'

const pepa = 'keke'
const baseClass = 'pk-PokemonCard'

export default function PokemonCard({number, name, imageUrl, types, link: Link}) {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-imageContainer`}>
        <Link>
          <img src={imageUrl} alt={name} />
        </Link>
      </div>
      <div className={`${baseClass}-info`}>
        <div className={`${baseClass}-titleContainer`}>
          {name} <span className={`${baseClass}-number`}>#{number}</span>
        </div>
        <div className={`${baseClass}-typesContainer`}>
          <div className={`${baseClass}-types`}>
            {types.map(type => (
              <div className={`${baseClass}-typeItem`} key={type}>
                <PokemonType type={type} size="small" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
