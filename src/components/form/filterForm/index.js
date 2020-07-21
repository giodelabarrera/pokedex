import React from 'react'

export default function FilterForm({
  types: typesProp = [],
  sort: sortProp = 'lowest_number',
  onSubmit
}) {
  const formData = {
    types: typesProp,
    sort: sortProp
  }

  const handleTypeChange = e => {
    // onSubmit()
  }

  const handleSortChange = e => {
    const updatedData = {
      ...formData,
      sort: e.target.value
    }
    onSubmit(updatedData)
  }

  return (
    <form className="pk-FilterForm">
      <div>
        <label>
          Type
          <input type="checkbox" />
          Bug
          <select multiple value={typesProp} onChange={handleTypeChange}>
            <option value="bug">Bug</option>
            <option value="dragon">Dragon</option>
            <option value="electric">Electric</option>
            <option value="fire">Fire</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Sort by <b>{sortProp}</b>
          <select value={sortProp} onChange={handleSortChange}>
            <option value="lowest_number">Lowest number</option>
            <option value="highest_number">Highest number</option>
            <option value="a_z">A-Z</option>
            <option value="z_a">Z-A</option>
          </select>
        </label>
      </div>
    </form>
  )
}
