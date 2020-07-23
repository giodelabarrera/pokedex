import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Logo from './logo'
import Search from './search'
import ToggleTheme from '../../ui/toggleTheme'

import './index.scss'
import useQueryParam from '../../../hooks/useQueryParams/useQueryParam'

const prefix = 'pk-Header'

const StringParam = {
  encode(value) {
    return 'encoded'
  },
  decode(value) {
    return 'decoded'
  }
}

export default function Header() {
  const [themeMode, setThemeMode] = useState('light')

  const [query, setQuery] = useQueryParam('query', StringParam)
  debugger

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
