import React, { useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { Box, Flex, Input } from '@chakra-ui/react'

const SearchBar = ({ getData, notFound }) => {
  const [city, setCity] = useState('')
  const onSubmit = (e) => {
    e.preventDefault();
    getData(city);
    setCity('')
    e.target.reset()
  }
  return (
    <form onSubmit={onSubmit}>
      <Flex gap='1rem' align='center'>
        <Box position='absolute' top='0.6rem' left='1rem' zIndex={10}>
          <FcSearch />
        </Box>
        <Input
          disabled={notFound && true}
          name='ciudad'
          onChange={(e) => setCity(e.target.value)}
          background='#c8dcdd'
          placeholder='Enter a city'
          fontSize='0.9rem'
          h='36px'
          p='0 1rem 0 2.5rem'
          border='1px solid #585858'
          boxShadow='2px 2px 11px -3px #aed6cd'
          borderRadius='20px'
          outline='none'
          w={['150px', '180px', '200px', '200px']}
        />
      </Flex>
    </form>
  )
}
export default SearchBar