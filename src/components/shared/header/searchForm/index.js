import React from 'react'

import SearchIcon from './searchIcon'
import './index.scss'

export default function SearchForm({value = '', placeholder, onChange}) {
  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div className="pk-SharedHeader-searchForm">
      <SearchIcon />
      <input
        className="pk-SharedHeader-searchForm-input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}
