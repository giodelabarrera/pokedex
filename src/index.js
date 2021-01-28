import React from 'react'
import ReactDOM from 'react-dom'

import 'styles/theme.scss'
import './global.scss'

import AppProviders from './context/appProviders'
import App from './app'

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
)
