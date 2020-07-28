import React from 'react'

import './index.scss'

const baseClass = 'pk-PokemonStats-linearProgress'

export default function LinearProgress({value}) {
  const style = {
    transform: `translateX(-${value}%)`
  }
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-bar`} style={style} />
    </div>
  )
}
