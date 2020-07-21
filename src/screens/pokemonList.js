import React, {useEffect} from 'react'

import {useDomain} from '../context/domainProvider'

export default function PokemonListScreen() {
  const domain = useDomain()

  useEffect(() => {
    domain
      .get('pokemon__get_list_use_case')
      .execute()
      .then(response => {
        // debugger
      })
  })

  return (
    <>
      <span>Pokemon list</span>
    </>
  )
}
