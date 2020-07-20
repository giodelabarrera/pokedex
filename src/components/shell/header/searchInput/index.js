import React from 'react'

import './index.scss'

export default function SearchInput({value, onChange}) {
  return (
    <div className="pk-Header-searchInput">
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}
