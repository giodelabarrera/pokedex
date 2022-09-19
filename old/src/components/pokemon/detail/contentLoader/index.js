import React from 'react'

import {PokemonTypeContentLoader} from 'components/pokemon/type'
import {PokemonStatsContentLoader} from 'components/pokemon/stats'

import './index.scss'

const baseClass = 'pk-PokemonDetail-contentLoader'

export default function PokemonDetailContentLoader() {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-title`}></div>
      <div className={`${baseClass}-content`}>
        <div className={`${baseClass}-column`}>
          <div className={`${baseClass}-imageContainer`}></div>
        </div>
        <div className={`${baseClass}-column`}>
          <div className={`${baseClass}-info`}>
            <div className={`${baseClass}-section`}>
              <div className={`${baseClass}-subtitle`}></div>
              <div className={`${baseClass}-types`}>
                <div className={`${baseClass}-typeItem`}>
                  <PokemonTypeContentLoader />
                </div>
              </div>
            </div>
            <div className={`${baseClass}-section`}>
              <div className={`${baseClass}-subtitle`}></div>
              <PokemonStatsContentLoader />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
