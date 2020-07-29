import React from 'react'
import {Listbox, ListboxOption} from '@reach/listbox'
import '@reach/listbox/styles.css'

import {SORT_TYPES} from './types'

const baseClass = 'pk-FilterSort'

function SortFilter({value = SORT_TYPES['lowestNumber'], onChange}) {
  return (
    <div className={baseClass}>
      <Listbox
        aria-labelledby="sort-filter-label"
        value={value}
        onChange={onChange}
      >
        {Object.keys(SORT_TYPES).map(sortTypeKey => (
          <ListboxOption key={sortTypeKey} value={SORT_TYPES[sortTypeKey]}>
            {sortTypeKey}
          </ListboxOption>
        ))}
      </Listbox>
    </div>
  )
}

export default SortFilter
export {SORT_TYPES as sortFilterTypes}
