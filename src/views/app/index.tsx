import styled from 'styled-components'

import Sidebar from '../../components/sidebar'

const AppContainer: any = styled.div`
  display: flex;
  height: 100vh;
`
const App: React.FC = (): JSX.Element => {
  return (
    <AppContainer>
      <Sidebar />
    </AppContainer>
  )
}

export default App
