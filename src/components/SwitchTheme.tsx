import { Box, HStack } from '@chakra-ui/react'
import { useTheme } from '@tresdoce-test/core'
import { useContext } from 'react'
import { StateContext } from '../context'

export const SwitchTheme = () => {
const { setTheme, theme } = useContext(StateContext)
const themeFont = useTheme()

  return (
    <HStack spacing={0} justify={'center'}>
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        padding={'16px'}
        width={'164px'}
        bgColor={theme === 'theme-a' ? 'black' : 'white' }
        color={theme === 'theme-a' ? 'white' : 'black'  }
        borderRadius={'8px 0px 0px 8px'}
        border={'2px solid black'}
        onClick={() => setTheme('theme-a')}
        fontWeight={400}
        fontSize={'16px'}
        fontFamily={ themeFont.fonts.title['l']['highContrast']['fontFamily']}
      >
        Theme A
      </Box>
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        padding={'16px'}
        width={'164px'}
        bgColor={theme === 'theme-b' ? 'black' : 'white' }
        color={theme === 'theme-b' ? 'white' : 'black'  }
        borderRadius={'0px 8px 8px 0px'}
        border={'2px solid black'}
        onClick={() => setTheme('theme-b')}
        fontWeight={400}
        fontSize={'16px'}
        fontFamily={ themeFont.fonts.title['l']['highContrast']['fontFamily']}
      >
        Theme B
      </Box>
    </HStack>
  )
}
