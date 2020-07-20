import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { DomainProvider } from './domainProvider'
import domain from '../domain'

export default function AppProviders ({ children }) {
  return (
    <DomainProvider domain={domain}>
      <Router>{children}</Router>
    </DomainProvider>
  )
}
