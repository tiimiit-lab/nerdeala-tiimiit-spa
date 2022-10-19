import { Avatar, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'
import { useTheme } from '@tresdoce-test/core'
import styled from 'styled-components'
import ArrowIcon from './ArrowIcon'

export const About = () => {
  const theme = useTheme()

  return (
    <Stack bgColor={theme.colors.bg.default} alignItems={'center'}>
      <Heading fontWeight={400} fontSize={'32px'} p={'88px 0px 64px 0px'}  fontFamily={ theme.fonts.title['l']['highContrast']['fontFamily']} >
        ¿Quiénes somos?
      </Heading>
      <Stack
        direction={['column', 'column', 'row']}
        justify={'center'}
        pb={'88px'}
        spacing={3}
      >
        {data &&
          data.map(({ name, image, position, id, linkedin }) => (
            <Card
              name={name}
              image={image}
              position={position}
              key={id}
              linkedin={linkedin}
            />
          ))}
      </Stack>
    </Stack>
  )
}


const LinkStyled = styled(Link)`
    position: relative;
  display: inline-block;


.arrow-icon {
position: absolute;
left: 86%;
opacity: 0;
transition: all 0.3s;
}

&:hover {
  .arrow-icon {
    left: 100%;
    opacity: 1;
  }
}
`

const Card = ({ name, image, position, linkedin }: any) => {
  const theme = useTheme()
  return (
    <Stack
      display={'flex'}
      flexDirection="column"
      alignItems={'center'}
      padding={'40px 12px'}
      width={['240px','240px','193px']}
      height={['260px','260px','227px']}
      bgColor={'white'}
      borderRadius={'12px'}
    >
      <Avatar size={'lg'} name={name} src={image} mb={3} />
      <LinkStyled href={linkedin} target={'_blank'}>
        <HStack>
          <Heading  fontFamily={ theme.fonts.title['l']['highContrast']['fontFamily']} fontWeight={600} fontSize={'14px'} color={'black'}>
            {name}
          </Heading>
          <ArrowIcon className='arrow-icon' />
        </HStack>
      </LinkStyled>
      <Text  fontFamily={ theme.fonts.title['l']['highContrast']['fontFamily']} fontWeight={400} fontSize={'12px'} color={theme.colors.bg.default}>
        {position}
      </Text>
    </Stack>
  )
}

const data = [
  {
    id: 1,
    name: 'Rodri Trejo Muniz',
    position: 'Design OPS Lead',
    linkedin: 'https://www.linkedin.com/in/tmrodrigo/',
    image:
      'https://media-exp1.licdn.com/dms/image/C4D03AQE_zSRxRZXI9A/profile-displayphoto-shrink_100_100/0/1597413258179?e=1670457600&v=beta&t=OesoP8ExS15gwRCWG_Q49K-RG00FwkOTLtlcs-Iffm8',
  },
  {
    id: 2,
    name: 'Sol Kiernan',
    position: 'UX/UI Designer',
    linkedin: 'https://www.linkedin.com/in/solkiernan/',
    image:
      'https://media-exp1.licdn.com/dms/image/C4D03AQH4v-aA2z_s0w/profile-displayphoto-shrink_100_100/0/1646510128842?e=1670457600&v=beta&t=CJe3PSjoR7KhfVg7rp4Qem_7ux3c05psMl-1Gl8MtNw',
  },
  {
    id: 3,
    name: 'Pau Martínez',
    position: 'UX/UI Designer',
    linkedin: 'https://www.linkedin.com/in/pauvolk/',
    image:
      'https://media-exp1.licdn.com/dms/image/C5603AQGoXP2spRMiEw/profile-displayphoto-shrink_200_200/0/1615822980253?e=1670457600&v=beta&t=o4qXjpVT7bg5K77Nv-NE4kQcQji0Mz6NFIKx_3s2d0k',
  },
  {
    id: 4,
    name: 'Fede Loterstein',
    position: 'Frontend Architect',
    linkedin: 'https://www.linkedin.com/in/federico-loterstein/',
    image:
      'https://media-exp1.licdn.com/dms/image/C4D03AQFdNpgAV9ZFTw/profile-displayphoto-shrink_200_200/0/1618676189781?e=1670457600&v=beta&t=-Th17_0UnWUaOxBajhFs5_z4XJsGZ10zM2tHxh1UeWA',
  },
  {
    id: 5,
    name: 'Maxi Delgado',
    position: 'Tech Lead React/Node',
    linkedin: 'https://www.linkedin.com/in/rudemex/',
    image:
      'https://media-exp1.licdn.com/dms/image/C5603AQGZ7xZfg7SP4g/profile-displayphoto-shrink_200_200/0/1517554551516?e=1670457600&v=beta&t=D5qMtLOFdkNYrFWYgFRx0LFK4E5ggwdXuljbeoiEf_M',
  },
]
