import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Logo from './logo'
import Search from './search'
import ToggleTheme from '../../ui/toggleTheme'

import './index.scss'
import useQueryParam, {StringParam} from 'hooks/useQueryParam'

const baseClass = 'pk-Header'

export default function Header() {
  const [themeMode, setThemeMode] = useState('light')

  const [query, setQuery] = useQueryParam('query', StringParam)

  const handleSearchSubmit = value => setQuery(value)
  const handleThemeModeChange = e => setThemeMode(e.target.value)

  return (
    <header className={baseClass}>
      <div className={`${baseClass}-content`}>
        <Link to="/" className={`${baseClass}-logoContainer`}>
          <Logo />
        </Link>
        <div className={`${baseClass}-offset`} />
        <div className={`${baseClass}-searchContainer`}>
          <Search
            initialValue={query}
            placeholder="Number or name"
            onSubmit={handleSearchSubmit}
          />
        </div>
        <div className={`${baseClass}-themeModeContainer`}>
          <ToggleTheme mode={themeMode} onChange={handleThemeModeChange} />
        </div>
      </div>
    </header>
  )
}
