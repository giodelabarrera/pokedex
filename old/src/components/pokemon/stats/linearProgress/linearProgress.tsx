import React from 'react'

import './index.scss'

const baseClass = 'pk-PokemonStats-linearProgress'

const MAX_STAT = 240

function LinearProgress({value}) {
  const lengthPercentage = getLengthPercentage(value, MAX_STAT)
  const barStyle = {
    transform: `translateX(-${lengthPercentage}%)`
  }
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-bar`} style={barStyle} />
    </div>
  )
}

function getLengthPercentage(value, maxValue) {
  return 100 - Math.round((value * 100) / maxValue)
}

export default LinearProgress
