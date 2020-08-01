import React, {useContext, useState, useEffect} from 'react'

const INITIAL_THEME_MODE = process.env.REACT_APP_INITIAL_THEME_MODE

const ThemeModeContext = React.createContext()

function ThemeModeProvider({...restProps}) {
  const [themeMode, setThemeMode] = useState(() => getInitialThemeMode())

  useEffect(() => {
    setClientThemeMode(themeMode)
  }, [themeMode])

  const contextValue = {
    themeMode,
    setThemeMode
  }

  return <ThemeModeContext.Provider value={contextValue} {...restProps} />
}

function getInitialThemeMode() {
  debugger
  const modeFromLocalStorage = localStorage.getItem('theme')
  if (modeFromLocalStorage) return modeFromLocalStorage

  const modeFromDOM = document.documentElement.getAttribute('data-theme')
  if (modeFromDOM) return modeFromDOM

  return INITIAL_THEME_MODE
}

function setClientThemeMode(mode) {
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

export {ThemeModeProvider, useThemeMode}
