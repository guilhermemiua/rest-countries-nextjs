import ChangeColorModeButton from '../ChangeColorModeButton'
import { Box, useColorModeValue, Flex, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

const Container = ({
  children,
  margin
}: {
  children: ReactNode
  margin?: string
}) => {
  return (
    <Box maxW={'90%'} margin={margin}>
      {children}
    </Box>
  )
}

const Header = () => {
  return (
    <Box
      as="header"
      w="100%"
      bg={useColorModeValue('lightElements', 'darkElements')}
      paddingY={7}
      borderBottomWidth={'1px'}
      borderBottomStyle="solid"
      borderBottomColor={useColorModeValue('lightElements', 'darkElements')}
    >
      <Container margin="0 auto">
        <Flex justify={'space-between'}>
          <Heading
            as={'h2'}
            color={useColorModeValue('lightText', 'darkText')}
            fontWeight={'extrabold'}
            fontSize={{
              base: 'lg',
              md: '2xl'
            }}
          >
            Where in the world?
          </Heading>
          <ChangeColorModeButton />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
