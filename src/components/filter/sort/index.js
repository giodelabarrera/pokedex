import React from 'react'
import {Listbox, ListboxOption} from '@reach/listbox'
import '@reach/listbox/styles.css'

import {SORT_TYPES} from './types'
import './index.scss'

const baseClass = 'pk-FilterSort'

function SortFilter({value = SORT_TYPES['lowestNumber'], onChange}) {
  return (
    <div className={baseClass}>
      <Listbox
        aria-labelledby="sort-filter-label"
        value={value}
        onChange={onChange}
      >
        <ListboxOption value={SORT_TYPES['lowestNumber']}>
          Lowest Number (First)
        </ListboxOption>
        <ListboxOption value={SORT_TYPES['highestNumber']}>
          Highest Number (First)
        </ListboxOption>
        <ListboxOption value={SORT_TYPES['aZ']}>A - Z</ListboxOption>
        <ListboxOption value={SORT_TYPES['zA']}>Z - A</ListboxOption>
      </Listbox>
    </div>
  )
}

export default SortFilter
export {SORT_TYPES as sortFilterTypes}
