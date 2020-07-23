import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Logo from './logo'
import Search from './search'
import ToggleTheme from '../../ui/toggleTheme'

import './index.scss'
import useQueryParam from '../../../hooks/useQueryParams/useQueryParam'

const prefix = 'pk-Header'

/**
 * Interprets an encoded string and returns either the string or null/undefined if not available.
 * Ignores array inputs (takes just first element in array)
 * @param input encoded string
 */
function getEncodedValue(input, allowEmptyString) {
  if (input == null) {
    return input
  }
  // '' or []
  if (
    input.length === 0 &&
    (!allowEmptyString || (allowEmptyString && input !== ''))
  ) {
    return null
  }

  const str = input instanceof Array ? input[0] : input
  if (str == null) {
    return str
  }
  if (!allowEmptyString && str === '') {
    return null
  }

  return str
}

function encodeString(str) {
  if (str === null) {
    return str
  }
  return String(str)
}

export function decodeString(input) {
  const str = getEncodedValue(input, true)
  if (str === null) return str

  return String(str)
}

const StringParam = {
  encode: encodeString,
  decode: decodeString
}

export default function Header() {
  const [themeMode, setThemeMode] = useState('light')

  const [query, setQuery] = useQueryParam('query', StringParam)

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
