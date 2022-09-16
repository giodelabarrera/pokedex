import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import {DomainProvider} from './domain'
import {ThemeModeProvider} from './themeMode'

import domain from '../domain'

export default function AppProviders({children}) {
  return (
    <DomainProvider domain={domain}>
      <ThemeModeProvider>
        <Router>{children}</Router>
      </ThemeModeProvider>
    </DomainProvider>
  )
}
