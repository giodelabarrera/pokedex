import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Logo from './logo'
import Search from './search'
import ToggleTheme from '../../ui/toggleTheme'

import './index.scss'

const prefix = 'pk-Header'

export default function Header() {
  const [query, setQuery] = useState('')
  const [themeMode, setThemeMode] = useState('light')

  const handleInputChange = e => setQuery(e.target.value)
  const handleThemeModeChange = e => setThemeMode(e.target.value)

  return (
    <header className={prefix}>
      <div className={`${prefix}-content`}>
        <Link to="/" className={`${prefix}-logoContainer`}>
          <Logo />
        </Link>
        <div className={`${prefix}-offset`} />
        <div className={`${prefix}-searchContainer`}>
          <Search
            value={query}
            placeholder="Number or name"
            onChange={handleInputChange}
          />
        </div>
        <div className={`${prefix}-themeModeContainer`}>
          <ToggleTheme mode={themeMode} onChange={handleThemeModeChange} />
        </div>
      </div>
    </header>
  )
}
