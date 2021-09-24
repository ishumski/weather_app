import styled from 'styled-components'
import Main from '../../components/main'

import Sidebar from '../../components/sidebar'

const AppContainer: any = styled.div`
  display: flex;
  height: 100%;
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
