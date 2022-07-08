import React, { useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { Box, Flex, Input } from '@chakra-ui/react'

const SearchBar = ({ getData }) => {
  const [city, setCity] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      getData(city);
    }}>
      <Flex gap='1rem' align='center'>
        <Box position='absolute' top='0.6rem' left='1rem' zIndex={10}>
          <FcSearch />
        </Box>
        <Input
          onChange={(e) => setCity(e.target.value)}
          background='#c8dcdd'
          placeholder='Enter a city'
          fontSize='0.9rem'
          h='32px'
          p='0 1rem 0 2.5rem'
          border='1px solid #585858'
          boxShadow='2px 2px 11px -3px #aed6cd'
          borderRadius='20px'
          outline='none'
          w='140px'
        />
        <Flex display={['none', 'unset', 'unset', 'unset']}>
          <Input type='submit' value='+' />
        </Flex>
      </Flex>
    </form>
  )
}
export default SearchBar