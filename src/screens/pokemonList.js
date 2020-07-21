import React, {useEffect, useState} from 'react'

import {useDomain} from '../context/domainProvider'
import FilterForm from '../components/form/filterForm'

export default function PokemonListScreen() {
  const domain = useDomain()

  const [formData, setFormData] = useState({
    sort: 'lowest_number',
    types: []
  })
  const {sort, types} = formData

  useEffect(() => {
    domain
      .get('pokemon__get_list_use_case')
      .execute()
      .then(response => {
        // debugger
      })
  })

  const handleFilterFormSubmit = formData => {
    console.log('update url with params 😎')
    setFormData(formData)
  }

  return (
    <>
      <FilterForm sort={sort} types={types} onSubmit={handleFilterFormSubmit} />
      {JSON.stringify(formData, 2)}
    </>
  )
}
