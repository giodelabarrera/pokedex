import { createContext, useContext, useState, useEffect } from 'react'

export type ThemeMode = 'dark' | 'light'
type SetThemeMode = React.Dispatch<React.SetStateAction<ThemeMode>>

export type ThemeModeContextValue = {
  themeMode: ThemeMode;
  setThemeMode: SetThemeMode;
}

const INITIAL_THEME_MODE = import.meta.env.VITE_INITIAL_THEME_MODE as ThemeMode

const ThemeModeContext = createContext<ThemeModeContextValue>(undefined!)

function ThemeModeProvider({ ...restProps }) {
  const [themeMode, setThemeMode] = useState(() => getInitialThemeMode())

  useEffect(() => {
    setClientThemeMode(themeMode)
  }, [themeMode])

  const contextValue: ThemeModeContextValue = {
    themeMode,
    setThemeMode
  } as const

  return <ThemeModeContext.Provider value={contextValue} {...restProps} />
}

function getInitialThemeMode() {
  const modeFromLocalStorage = localStorage.getItem('theme') as ThemeMode
  if (modeFromLocalStorage) return modeFromLocalStorage

  const modeFromDOM = document.documentElement.getAttribute('data-theme') as ThemeMode
  if (modeFromDOM) return modeFromDOM

  return INITIAL_THEME_MODE
}

function setClientThemeMode(mode: ThemeMode) {
  document.documentElement.setAttribute('data-theme', mode)
  localStorage.setItem('theme', mode)
}

function useThemeMode() {
  const context = useContext(ThemeModeContext)
  if (context === undefined) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider')
  }
  return context
}

export { ThemeModeProvider, useThemeMode }
