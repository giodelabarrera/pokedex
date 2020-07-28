import React, {useState} from 'react'

import SearchIcon from './searchIcon'
import './index.scss'

export default function SearchForm({initialValue = '', placeholder, onSubmit}) {
  const [value, setValue] = useState(initialValue)

  const handleSubmit = e => {
    e.preventDefault()
    setValue(value)
    onSubmit(value)
  }

  const handleChange = e => setValue(e.target.value)

  return (
    <div className="pk-SharedHeader-searchForm">
      <form onSubmit={handleSubmit}>
        <SearchIcon />
        <input
          className="pk-SharedHeader-searchForm-input"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
