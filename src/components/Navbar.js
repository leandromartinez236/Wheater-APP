import React from 'react'
import { Box } from '@chakra-ui/react'
import SearchBar from './SearchBar'

const Navbar = ({ getData }) => {
  return (
    <Box bgColor='#524fec' boxShadow='0px 3px 9px 2px #364154' >
      <Box maxW='90%' m='0 auto' p='25px 0px'>
        <Box position='relative'>
          <SearchBar getData={getData} />
        </Box>
      </Box>
    </Box>
  )
}
export default Navbar