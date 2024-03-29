import * as React from 'react'
import ReactDOM from 'react-dom'

import {initServer} from './test/server'
import AppProviders from './context/appProviders'
import App from './app'

import './styles/theme.scss'
import './global.scss'

initServer().then(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  )
)
