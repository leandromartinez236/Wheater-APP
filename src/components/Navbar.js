import React from 'react'
import { Box } from '@chakra-ui/react'
import SearchBar from './SearchBar'

const Navbar = ({ getData }) => {
  return (
    <Box bgColor='#5b58ff' >
      <Box maxW='90%' m='0 auto' p='25px 0px'>
        <Box
          display='flex'
          alignItems='center'
          position='relative'
          maxW='200px'
        >
          <SearchBar getData={getData} />
        </Box>
      </Box>
    </Box>
  )
}
export default Navbar