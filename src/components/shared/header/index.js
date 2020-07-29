import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Logo from './logo'
import SearchForm from './searchForm'
import ToggleTheme from './toggleTheme'
import useQueryParam, {StringParam} from 'hooks/useQueryParam'

import './index.scss'

const baseClass = 'pk-SharedHeader'

export default function Header() {
  const [themeMode, setThemeMode] = useState('light')

  const [query, setQuery] = useQueryParam('query', StringParam)

  const handleSearchFormSubmit = value => setQuery(value)
  const handleThemeModeClick = mode => setThemeMode(mode)

  return (
    <header className={baseClass}>
      <div className={`${baseClass}-content`}>
        <Link to="/" className={`${baseClass}-logoContainer`}>
          <Logo />
        </Link>
        <div className={`${baseClass}-offset`} />
        <div className={`${baseClass}-searchContainer`}>
          <SearchForm
            initialValue={query}
            placeholder="Number or name"
            onSubmit={handleSearchFormSubmit}
          />
        </div>
        <div className={`${baseClass}-themeModeContainer`}>
          <ToggleTheme mode={themeMode} onClick={handleThemeModeClick} />
        </div>
      </div>
    </header>
  )
}
