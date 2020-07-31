import React from 'react'

import './index.scss'

const baseClass = 'pk-PokemonDetail-contentLoader'

export default function DetailContentLoader() {
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
                  {/* <PokemonType type={type} /> */}
                </div>
              </div>
            </div>
            <div className={`${baseClass}-section`}>
              <div className={`${baseClass}-subtitle`}></div>
              {/* <PokemonStats stats={stats} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
