import { MouseEventHandler } from 'react'

import SunIcon from './sunIcon'
import MoonIcon from './moonIcon'
import { type ThemeMode } from '../../../../context/themeMode'

import './index.css'

const baseClass = 'pk-SharedHeader-toggleTheme'

type ToggleThemeProps = {
  mode: ThemeMode,
  onClick: (newMode: ThemeMode) => void
}

export default function ToggleTheme({ mode = 'light', onClick }: ToggleThemeProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
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
