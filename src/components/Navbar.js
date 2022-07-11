import React from 'react'
import { Alert, AlertDescription, AlertIcon, Box, Flex } from '@chakra-ui/react'
import SearchBar from './SearchBar'

const Navbar = ({ getData, notFound }) => {
  return (
    <Box bgColor='#0061ac' boxShadow='0px 3px 9px 2px #242528' >
      <Box maxW='90%' m='0 auto' p='25px 0px'>
        <Flex align='center' position='relative'>
          <SearchBar getData={getData} notFound={notFound} />
          {notFound &&
            <Alert transition='0.4s' ml='20px' p='0 8px' w='fit-content' borderRadius='5px' h='36px' status='error'>
              <AlertIcon h='15px' mr='5px' />
              <AlertDescription>City Not Found</AlertDescription>
            </Alert>
          }
        </Flex>
      </Box>
    </Box>

  )
}
export default Navbar