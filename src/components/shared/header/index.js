import React from 'react'
import {Link} from 'react-router-dom'

import Logo from './logo'
import SearchForm from './searchForm'
import ToggleTheme from './toggleTheme'
import useQueryParam, {StringParam} from 'hooks/useQueryParam'
import {useThemeMode} from 'context/themeMode'

import './index.scss'

const baseClass = 'pk-SharedHeader'

export default function Header() {
  const {themeMode, setThemeMode} = useThemeMode()
  const [query, setQuery] = useQueryParam('query', StringParam)

  const handleSearchFormSubmit = value => setQuery(value)
  const handleThemeModeClick = themeMode => setThemeMode(themeMode)

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
