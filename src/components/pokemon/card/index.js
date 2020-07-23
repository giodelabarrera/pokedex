import React from 'react'

import './index.scss'

export default function Card({id, number, name, imageUrl, slug, link: Link}) {
  return (
    <div className="pk-PokemonCard">
      <Link>
        <img src={imageUrl} alt={name} />
      </Link>
    </div>
  )
}
