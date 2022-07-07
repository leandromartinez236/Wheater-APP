import React, { useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { Box, Input } from '@chakra-ui/react'

const SearchBar = ({ getData }) => {
  const [city, setCity] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      getData(city);
    }}>
      <Box position='absolute' left='1rem'>
        <FcSearch />
      </Box>
      <Input
        onChange={(e) => setCity(e.target.value)}
        background='#c8dcdd'
        w='100%'
        placeholder='Search'
        fontSize='0.9rem'
        h='32px'
        p='0 1rem'
        pl='2.5rem'
        border='1px solid #585858'
        boxShadow='2px 2px 11px -3px #aed6cd'
        borderRadius='20px'
        outline='none'
      />
      <input type='submit' value='Agregar' />
    </form>
  )
}
export default SearchBar