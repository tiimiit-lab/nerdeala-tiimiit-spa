import { Box, Container, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import { useTheme } from '@tresdoce-test/core'
import logoNerdearla from '../assets/logo-nerdearla.svg'

export const Footer = () => {
  const theme = useTheme()
  return (
    <Box bgColor={'black'}>
        <Container>
            <Stack alignItems={'center'}>
                <Text  fontFamily={ theme.fonts.title['l']['highContrast']['fontFamily']} fontWeight={600} fontSize={'14px'} mt={'32px'} color={theme.colors.text.default}>Este workshop es parte de </Text>
                <Image w={'270px'} src={logoNerdearla} alt='Nerdearla' mt={'8px'}/>
                <HStack mt={'65px'} pb={'33px'}>
                    <Text  fontFamily={ theme.fonts.title['l']['highContrast']['fontFamily']} fontWeight={400} fontSize={'14px'} color={theme.colors.text.default}>¿Querés ser parte de tiimiit?</Text>
                    <Link  fontFamily={ theme.fonts.title['l']['highContrast']['fontFamily']} fontWeight={400} fontSize={'14px'} color={theme.colors.bg.default} href={'https://www.linkedin.com/showcase/tiimiit/'} target={'_blank'}>Checkeá nuestras búsquedas abiertas</Link>
                </HStack>
            </Stack>
        </Container>
    </Box>
  )
}
