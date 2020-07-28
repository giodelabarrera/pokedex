import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Logo from './logo'
import SearchForm from './searchForm'
import ToggleTheme from '../../ui/toggleTheme'

import './index.scss'
import useQueryParam, {StringParam} from 'hooks/useQueryParam'

const baseClass = 'pk-SharedHeader'

export default function Header() {
  const [themeMode, setThemeMode] = useState('light')

  const [query, setQuery] = useQueryParam('query', StringParam)

  const handleSearchFormSubmit = value => setQuery(value)
  const handleThemeModeChange = e => setThemeMode(e.target.value)

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
          <ToggleTheme mode={themeMode} onChange={handleThemeModeChange} />
        </div>
      </div>
    </header>
  )
}
