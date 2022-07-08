import React from 'react'
import { Box, Flex, Text, Img } from '@chakra-ui/react'
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi'
import { BiWind } from 'react-icons/bi'
import { WiHumidity } from 'react-icons/wi'
import { FaTrash } from 'react-icons/fa'

const Card = ({ content, deleteCard, id }) => {
  return (
    <Box
      m='0 auto'
      borderRadius='20px'
      w='fit-content'
      boxShadow='1px 1px 8px -1px #8d8181e8'
      background='rgb(6,40,61);
      background: linear-gradient(360deg, rgba(6,40,61,0.6747198879551821) 0%, rgba(19,99,223,0.6551120448179272) 28%, rgba(71,181,255,0.7307422969187676) 71%)'
      padding='2rem 1.5rem'
      color='white'
    >
      <Box _hover={{ transition: '0.3s', fontSize: '1.1rem' }} onClick={deleteCard} position='absolute' mt='-10px' color='#e60505e8'><FaTrash /></Box>
      <Flex flexDirection='column-reverse'>
        <Box display='flex' justifyContent='space-between' gap={['2rem', '4rem', '4rem', '4rem']} >
          <Flex gap='0.2rem' align='center'><BiWind /> {content.wind}m/s</Flex >
          <Flex align='center'><WiHumidity />{content.humidity}% </Flex >
        </Box>
        <Flex flexDir='column' alignItems='center' >
          <Flex flexDir='column' gap='0.6rem' alignItems='center'>
            <Flex flexDir='column' alignItems='center'>
              <Text fontSize='2.5rem' m='0' ml='6px'>{content.temp.toFixed()}°</Text>
              <Flex >
                <Flex align='center' fontSize='13px'><HiArrowSmUp />{content.tempMax}°</Flex>
                <Flex align='center' fontSize='13px'><HiArrowSmDown />{content.tempMin}°</Flex>
              </Flex>
            </Flex>
            <Text m='0' textAlign='center'><strong>{content.name}</strong>/{content.country}</Text>
          </Flex>
          <Img w='100px' h='100px' src={`http://openweathermap.org/img/wn/${content.img}@2x.png`}
            alt={content.name} />
        </Flex>
      </Flex>
    </Box >
  )
}
export default Card