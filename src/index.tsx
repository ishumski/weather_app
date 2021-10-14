import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import styled from 'styled-components'
import Main from './views/main/Main'
import Sidebar from './common/sidebar/Sidebar'
import GlobalStyle from './assets/styles/global-styles'
import { elemPlacement, elemSize } from './assets/styles/mixins'

const AppContainer: any = styled.div`
  ${elemPlacement({ dp: 'flex' })}
  ${elemSize({ h: '100%' })}

  @media (max-width: 1175px) {
    ${elemPlacement({ dp: 'flex', fd: 'column' })}
    ${elemSize({ minw: '328px' })}
    overflow-x: hidden;
  }
`
const App: React.FC = (): JSX.Element => {
  return (
    <AppContainer>
      <Sidebar />
      <Main />
    </AppContainer>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
