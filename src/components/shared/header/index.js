import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useMatch} from 'react-router-dom'

import Logo from './logo'
import Search from './search'
import ToggleTheme from './toggleTheme'
import useQueryParam, {StringParam} from 'hooks/useQueryParam'
import {useThemeMode} from 'context/themeMode'

import './index.scss'

const baseClass = 'pk-SharedHeader'

export default function SharedHeader() {
  const {themeMode, setThemeMode} = useThemeMode()
  const [query = '', setQuery] = useQueryParam('query', StringParam)
  const navigate = useNavigate()
  const match = useMatch('/')

  const [searchValue, setSearchValue] = useState(query)

  useEffect(() => {
    setSearchValue(query)
  }, [query])

  function handleThemeModeClick(themeMode) {
    setThemeMode(themeMode)
  }

  function handleSearchChange(searchValue) {
    setSearchValue(searchValue)
  }

  function handleSearchFormSubmit(e) {
    e.preventDefault()
    // match if it is homepage
    if (match) {
      // simply update query param
      setQuery(searchValue)
    } else {
      // go to homepage with query param
      navigate(`/?query=${searchValue}`)
    }
  }

  return (
    <header className={baseClass}>
      <div className={`${baseClass}-content`}>
        <Link to="/" className={`${baseClass}-logoContainer`}>
          <Logo />
        </Link>
        <div className={`${baseClass}-offset`} />
        <div className={`${baseClass}-searchContainer`}>
          <form
            className={`${baseClass}-searchForm`}
            onSubmit={handleSearchFormSubmit}
          >
            <Search
              value={searchValue}
              placeholder="Name or Number"
              onChange={handleSearchChange}
            />
          </form>
        </div>
        <div className={`${baseClass}-themeModeContainer`}>
          <ToggleTheme mode={themeMode} onClick={handleThemeModeClick} />
        </div>
      </div>
    </header>
  )
}
