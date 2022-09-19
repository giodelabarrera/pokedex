import React from 'react'

import SunIcon from './sunIcon'
import MoonIcon from './moonIcon'

import './index.scss'

const baseClass = 'pk-SharedHeader-toggleTheme'

export default function ToggleTheme({mode = 'light', onClick}) {
  const handleClick = e => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    onClick(newMode)
  }

  const ModeIcon = mode === 'light' ? MoonIcon : SunIcon

  return (
    <button className={baseClass} onClick={handleClick}>
      <ModeIcon />
    </button>
  )
}
