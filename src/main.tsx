import * as React from 'react'
import ReactDOM from 'react-dom'

import { initServer } from './test/server'
import AppProviders from './context/appProviders'
import App from './app'

import './styles/theme.css'
import './global.css'

initServer().then(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <h1>Hello</h1>
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  )
)
