import React from 'react'
import { Box, Flex, Text, Img } from '@chakra-ui/react'
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi'
import { WiCloudyWindy } from 'react-icons/wi'
import { IoIosWater } from 'react-icons/io'
import { FaTrash } from 'react-icons/fa'

const Card = ({ content, deleteCard, id }) => {
  return (
    <Box
      h='fit-content'
      m='0 auto'
      w='90%'
      borderRadius='10px'
      padding='2rem 1.5rem'
      _hover={{ background: '#0b375d69', backdropFilter: 'blur(3px)' }}
      color='white'
    >
      <Flex flexDirection='column-reverse'>
        <Box display='flex' justifyContent='space-between'  >
          <Flex gap='0.2rem' align='center'><WiCloudyWindy fontSize='1.4rem' /> {content.wind}m/s</Flex >
          <Flex align='center'><IoIosWater color='#1ca2cd' fontSize='1.2rem' />{content.humidity}% </Flex >
        </Box>
        <Flex flexDir='column'>
          <Box w='fit-content' onClick={deleteCard} color='#a7a7a3' _hover={{ color: '#c51111' }}><FaTrash /></Box>
          <Flex alignItems='center' flexDir='column'>
            <Flex flexDir='column' gap='0.6rem' alignItems='center'>
              <Flex flexDir='column' alignItems='center'>
                <Text fontSize='2.5rem' m='0' ml='9px'>{content.temp.toFixed()}°</Text>
                <Flex gap='1rem'>
                  <Flex align='center' fontSize='13px'><HiArrowSmUp color='red' />{content.tempMax}°</Flex>
                  <Flex align='center' fontSize='13px'><HiArrowSmDown color='blue' />{content.tempMin}°</Flex>
                </Flex>
              </Flex>
              <Text letterSpacing={0.5} m='0' textAlign='center'><strong>{content.name}</strong>/{content.country}</Text>
            </Flex>
            <Img w='100px' h='100px' src={`http://openweathermap.org/img/wn/${content.img}@2x.png`}
              alt={content.name} />
          </Flex>
        </Flex>
      </Flex>
    </Box >
  )
}
export default Card