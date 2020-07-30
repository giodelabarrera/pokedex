import React from 'react'

import SearchIcon from './searchIcon'
import './index.scss'

export default function Search({value = '', placeholder, onChange}) {
  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div className="pk-SharedHeader-search">
      <SearchIcon />
      <input
        className="pk-SharedHeader-search-input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}
