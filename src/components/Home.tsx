import { Container, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { Button, useTheme } from "@tresdoce-test/core"

export const Home = () => {
  const theme = useTheme()

  const NavigateTo = (url: string) => {
    window.location.href = url
  }
  return (
    <Container>
    <Stack p={'68px 0px 159px 0px'}>
      <Heading fontFamily={ theme.fonts.title['l']['highContrast']['fontFamily']} fontWeight={600} fontSize={'16px'} color={theme.colors.bg.default} pb={'40px'}>Workshop</Heading>
      <Heading fontFamily={ theme.fonts.title['l']['highContrast']['fontFamily']} fontWeight={600} fontSize={'56px'} color={'black'}  pb={'40px'} >
        Plantar un árbol, escribir un libro y armar una librería.
      </Heading>
      <Text  fontFamily={ theme.fonts.title['l']['highContrast']['fontFamily']} fontWeight={400} fontSize={'20px'} color={'black'}  pb={'40px'}>
        Si ya viste el taller sobre creación de librerías multi-brand y ahora
        querés probarlo vos, acá te dejamos los recursos.
      </Text>
      <HStack spacing={5}>
      <Button onClick={() => NavigateTo('https://github.com/tiimiit-lab') }>Ir a Github</Button>
      <Button onClick={() => NavigateTo('https://www.figma.com/community/file/1164892729417359879') } style={{backgroundColor: 'black'}}>Ir a Figma</Button>
      </HStack>
    </Stack>
    </Container>
  )
}
