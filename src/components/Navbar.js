import React from 'react'
import { Box, Input } from '@chakra-ui/react'
import { FcSearch } from 'react-icons/fc'

const Navbar = () => {
  return (
    <Box bgColor='#5b58ff' >
      <Box maxW='90%' m='0 auto' p='25px 0px'>
        <Box
          display='flex'
          alignItems='center'
          position='relative'
          maxW='200px'
        >
          <Box position='absolute' left='1rem'>
            <FcSearch />
          </Box>
          <Input
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
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar