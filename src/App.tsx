import { Box } from '@chakra-ui/react'
import { Provider } from '@tresdoce-test/core'
import { useContext } from 'react'
import { About, Footer, Home, Navbar, SwitchTheme } from './components'
import { StateContext } from './context'

function App() {
  const { theme } = useContext(StateContext)
  
  return (
    <Provider variant={theme}>
      <Box bgColor={'white'}>
        <Navbar />
        <SwitchTheme />
        <Home />
        <About />
        <Footer />
      </Box>
    </Provider>
  )
}

export default App
