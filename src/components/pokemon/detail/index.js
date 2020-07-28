import React from 'react'

import PokemonTypes from 'components/pokemon/types'
import PokemonType from 'components/pokemon/type'
import PokemonStats from 'components/pokemon/stats'

import './index.scss'

const baseClass = 'pk-PokemonDetail'

export default function PokemonDetail({pokemon}) {
  const {name, number, types, stats, imageUrl} = pokemon
  return (
    <section className={baseClass}>
      <h1 className={`${baseClass}-title`}>
        {name} <span className={`${baseClass}-number`}>#{number}</span>
      </h1>
      <div>
        <div className={`${baseClass}-imageContainer`}>
          <img src={imageUrl} alt={name} />
        </div>
        <div>
          <div className={`${baseClass}-section`}>
            <h3 className={`${baseClass}-subtitle`}>Type</h3>
            <PokemonTypes types={types}>
              {type => <PokemonType type={type} />}
            </PokemonTypes>
          </div>
          <div className={`${baseClass}-section`}>
            <h3 className={`${baseClass}-subtitle`}>Stats</h3>
            <PokemonStats stats={stats} />
          </div>
        </div>
      </div>
    </section>
  )
}
