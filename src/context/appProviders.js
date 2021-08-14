import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'

import {DomainProvider} from './domain'
import {ThemeModeProvider} from './themeMode'

import domain from '../domain'
import {store} from '../store'

export default function AppProviders({children}) {
  return (
    <DomainProvider domain={domain}>
      <ReduxProvider store={store}>
        <ThemeModeProvider>
          <Router>{children}</Router>
        </ThemeModeProvider>
      </ReduxProvider>
    </DomainProvider>
  )
}
