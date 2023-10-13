import React from 'react'

import CircularProgress from './circularProgress'
import './index.scss'

const baseClass = 'pk-FeedbackSpinner'

export default function FeedbackSpinner() {
  return (
    <div className={baseClass}>
      <CircularProgress />
    </div>
  )
}
