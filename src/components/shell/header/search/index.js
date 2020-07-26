import React, {useState} from 'react'

import SearchIcon from './searchIcon'
import './index.scss'

export default function Search({initialValue = '', placeholder, onSubmit}) {
  const [value, setValue] = useState(initialValue)

  const handleSubmit = e => {
    e.preventDefault()
    setValue(value)
    onSubmit(value)
  }

  const handleChange = e => setValue(e.target.value)

  return (
    <div className="pk-Header-search">
      <form onSubmit={handleSubmit}>
        <SearchIcon />
        <input
          className="pk-Header-searchInput"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
