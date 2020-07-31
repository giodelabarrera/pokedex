import React from 'react'

import PokemonType from 'components/pokemon/type'
import PokemonStats from 'components/pokemon/stats'

import ContentLoader from './contentLoader'

import './index.scss'

const baseClass = 'pk-PokemonDetail'

function PokemonDetail({pokemon}) {
  const {name, number, types, stats, imageUrl} = pokemon
  return (
    <section className={baseClass}>
      <h1 className={`${baseClass}-title`}>
        {name} <span className={`${baseClass}-number`}>#{number}</span>
      </h1>
      <div className={`${baseClass}-content`}>
        <div className={`${baseClass}-column`}>
          <div className={`${baseClass}-imageContainer`}>
            <img src={imageUrl} alt={name} />
          </div>
        </div>
        <div className={`${baseClass}-column`}>
          <div className={`${baseClass}-info`}>
            <div className={`${baseClass}-section`}>
              <h3 className={`${baseClass}-subtitle`}>Type</h3>
              <div className={`${baseClass}-types`}>
                {types.map(type => (
                  <div className={`${baseClass}-typeItem`} key={type}>
                    <PokemonType type={type} />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${baseClass}-section`}>
              <h3 className={`${baseClass}-subtitle`}>Stats</h3>
              <PokemonStats stats={stats} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PokemonDetail
export {ContentLoader as PokemonDetailContentLoader}
