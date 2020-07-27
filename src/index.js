import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'

import AppProviders from './context/appProviders'
import App from './app'

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
)
