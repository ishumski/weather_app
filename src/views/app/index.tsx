import styled from 'styled-components'
import { elemPlacement, elemSize } from '../../assets/styles/mixins'
import Main from '../../components/main/Main'

import Sidebar from '../../components/sidebar/Sidebar'

const AppContainer: any = styled.div`
  ${elemPlacement({ dp: 'flex' })}
  ${elemSize({ h: '100%' })}

  @media (max-width: 1150px) {
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

export default App
