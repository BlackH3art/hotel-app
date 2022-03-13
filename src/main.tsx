import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ApplicationProvider } from './context/ApplicationContext'

ReactDOM.render(
  <React.StrictMode>
    <ApplicationProvider>
      <App />
    </ApplicationProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
