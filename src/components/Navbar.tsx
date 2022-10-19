import { Box , Image} from '@chakra-ui/react'
import logo from '../assets/logo-tiimiit.svg'
export const Navbar = () => {
  return (
   <Box p={'40px'}>
      <Image src={logo} alt='Timmit' w={'128px'} h={'55px'}/>
   </Box>
  )
}

