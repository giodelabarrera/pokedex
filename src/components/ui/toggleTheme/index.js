import React from 'react'

export default function ToggleTheme ({ mode = 'light', onChange }) {
  return (
    <div>
      <label>
        <input
          type='radio'
          value='light'
          checked={mode === 'light'}
          onChange={onChange}
        />
        Light
      </label>
      <label>
        <input
          type='radio'
          value='dark'
          checked={mode === 'dark'}
          onChange={onChange}
        />
        Dark
      </label>
    </div>
  )
}
