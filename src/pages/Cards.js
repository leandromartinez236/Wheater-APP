import React from 'react'
import Card from '../components/Card'
import { Flex, Grid, Heading } from '@chakra-ui/react'
const Cards = ({ data, deleteCard }) => {
  if (data.length > 0) {
    return (
      <Grid
        maxW='90%'
        m='4rem auto'
        h='360px'
        overflow='auto'
        p='2px 10px 5px 0px'
        gap='3rem'
        gridTemplateColumns={'repeat(auto-fill, minmax(210px,1fr))'}
      >
        {data.map(data => (
          <Card content={data} deleteCard={() => deleteCard(data.id)} key={data.id} id={data.id} />
        ))}
      </Grid>
    )
  } else {
    return (
      <Flex h='80vh' justifyContent='center' alignItems='center'>
        <Heading textAlign='center' fontSize={['1rem', '1rem', '2rem', '2rem']}>No hay ciudades</Heading>
      </Flex>
    )
  }
}

export default Cards