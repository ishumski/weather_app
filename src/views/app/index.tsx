import styled from 'styled-components'
import { elemPlacement, elemSize } from '../../assets/styles/mixins'
import Main from '../../components/main'

import Sidebar from '../../components/sidebar'

const AppContainer: any = styled.div`
  ${elemPlacement({ dp: 'flex' })}
  ${elemSize({ h: '100%' })}
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
