import React from 'react'

import SearchIcon from './searchIcon'
import './index.scss'

export default function Search({value, onChange}) {
  return (
    <div className="pk-Header-search">
      <SearchIcon />
      <input
        className="pk-Header-searchInput"
        type="text"
        value={value}
        placeholder="Number or name"
        onChange={onChange}
      />
    </div>
  )
}
