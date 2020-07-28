import React from 'react'

import './index.scss'

const baseClass = 'pk-PokemonDetail'

export default function PokemonDetail({pokemon}) {
  const {name, number, types, stats, imageUrl} = pokemon
  return (
    <section className={baseClass}>
      <h1 className={`${baseClass}-title`}>
        {name} <span className={`${baseClass}-subtitle`}>Nº {number}</span>
      </h1>
      <div>
        <div className={`${baseClass}-imageContainer`}>
          <img src={imageUrl} alt={name} />
        </div>
        <div>
          <div>
            {types.map(type => (
              <span>{type}</span>
            ))}
          </div>
          <div>
            <ul>
              <li>HP: {stats.hp}</li>
              <li>Attack: {stats.attack}</li>
              <li>Defense: {stats.defense}</li>
              <li>Special Attack: {stats.special_attack}</li>
              <li>Special Defense: {stats.special_defense}</li>
              <li>Speed: {stats.speed}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
