import React, {useState} from 'react'

import './index.scss'

import Logo from './logo'
import SearchInput from './searchInput'
import ToggleTheme from '../../ui/toggleTheme'

export default function Header() {
  const [query, setQuery] = useState('')
  const [themeMode, setThemeMode] = useState('light')

  const handleInputChange = e => setQuery(e.target.value)
  const handleThemeModeChange = e => setThemeMode(e.target.value)

  return (
    <header className="pk-Header">
      <Logo />
      <SearchInput value={query} onChange={handleInputChange} />
      <ToggleTheme mode={themeMode} onChange={handleThemeModeChange} />
    </header>
  )
}
