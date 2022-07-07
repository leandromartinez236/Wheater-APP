import React from 'react'
import { Box, Flex, Text, Img } from '@chakra-ui/react'
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi'
import { BiWind } from 'react-icons/bi'
import { WiHumidity } from 'react-icons/wi'

const Card = ({ content }) => {
  return (
    <Box
      bgColor='#f5d929'
      padding='2rem 1.5rem'
    >
      <Flex flexDirection='column-reverse'>
        <Box display='flex' justifyContent='space-between' flexDirection={['column', 'unset', 'unset', 'unset']}>
          <Flex align='center'><BiWind /> {content.wind}m/s</Flex >
          <Flex align='center'><WiHumidity />{content.humidity}% </Flex >
        </Box>
        <Flex flexDir='column' alignItems='center' mt='1rem'>
          <Flex flexDir='column' gap='0.6rem' alignItems='center'>
            <Flex flexDir='column'>
              <Text fontSize='2.5rem' m='0' ml='6px'>{content.temp.toFixed()}°</Text>
              <Flex  >
                <Text m='0' fontSize='12px'><HiArrowSmUp />{content.tempMax}°</Text>
                <Text m='0' fontSize='12px'><HiArrowSmDown />{content.tempMin}°</Text>
              </Flex>
            </Flex>
            <Text m='0' textAlign='center'>{content.name}/{content.country}</Text>
          </Flex>
          <Img w='100px' h='100px' src={`http://openweathermap.org/img/wn/${content.img}@2x.png`}
            alt={content.name} />
        </Flex>
      </Flex>
    </Box >
  )
}

export default Card