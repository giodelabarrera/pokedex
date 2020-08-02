import React from 'react'

import './index.scss'

const baseClass = 'pk-EmptyPokeball'

export default function EmptyPokeball() {
  return (
    <svg className={baseClass} viewBox="0 0 48 48">
      <path
        className="topCap"
        fill="#ff3d00"
        d="M24,4C12.953,4,4,12.953,4,24h40C44,12.953,35.047,4,24,4z"
      ></path>
      <path
        fill="#e4e8ea"
        d="M24,44c11.047,0,20-8.953,20-20H4C4,35.047,12.953,44,24,44z"
      ></path>
      <path
        fill="#cfd8dc"
        d="M24,44c11.047,0,20-8.953,20-20c0,0-0.16,16-20,16S4,24,4,24C4,35.047,12.953,44,24,44z"
      ></path>
      <path
        fill="#90a4ae"
        d="M43,24c0-4.42-8.505-8-19-8S5,19.58,5,24s8.505,8,19,8S43,28.42,43,24z"
      ></path>
      <path fill="#546e7a" d="M5,24c0-4.42,8.505-8,19-8s19,3.58,19,8H5z"></path>
      <path
        fill="#37474f"
        d="M44,24c0-5.047-8.785-9-20-9S4,18.953,4,24c0,4.107,5.82,7.489,14.031,8.607	C18.334,35.633,20.892,38,24,38s5.666-2.367,5.969-5.393C38.18,31.489,44,28.107,44,24z M24,31c-10.607,0-18-3.689-18-7	s7.393-7,18-7s18,3.689,18,7S34.607,31,24,31z"
      ></path>
      <circle cx="24" cy="16" r="6" fill="#37474f"></circle>
      <circle cx="24" cy="16" r="4" fill="#e4e8ea"></circle>
      <circle cx="24" cy="16" r="2" fill="#37474f"></circle>
    </svg>
  )
}
