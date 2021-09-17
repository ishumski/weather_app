import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './views/app'
import store from './store/store'

import GlobalStyle from './assets/styles/global-styles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
