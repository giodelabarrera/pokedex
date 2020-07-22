import React from 'react'

import './index.scss'

export default function Search({value, onChange}) {
  return (
    <div className="pk-Header-search">
      <input
        className="pk-Header-searchInput"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
