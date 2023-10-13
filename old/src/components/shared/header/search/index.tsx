import React from 'react'

import SearchIcon from './searchIcon'
import './index.scss'

const baseClass = 'pk-SharedHeader-search'

export default function Search({value = '', placeholder, onChange}) {
  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div className={baseClass}>
      <SearchIcon />
      <input
        className={`${baseClass}-input`}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}
