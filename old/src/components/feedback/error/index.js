import React from 'react'

import './index.scss'

const baseClass = 'pk-FeedbackError'

export default function FeedbackError({error}) {
  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>{error.statusText}</h1>
    </div>
  )
}
