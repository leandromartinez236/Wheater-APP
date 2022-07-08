import React from 'react'
import Card from '../components/Card'
import { Flex, Grid, Heading } from '@chakra-ui/react'
const Cards = ({ data, deleteCard }) => {

  if (data.length > 0) {
    return (
      <Grid
        maxW='90%'
        m='0 auto'
        mt='2rem'
        gap='2rem'
        gridTemplateColumns={['repeat(auto-fill, minmax(205px,1fr))', 'repeat(auto-fill, minmax(190px,1fr))', 'repeat(auto-fill, minmax(280px,1fr))', 'repeat(auto-fill, minmax(220px,1fr))']}
      >
        {data.map(data => (
          <Card content={data} deleteCard={() => deleteCard(data.id)} key={data.id} id={data.id} />
        ))}
      </Grid>
    )
  } else {
    return (
      <Flex h='80vh' color='white' justifyContent='center' alignItems='center'>
        <Heading textAlign='center' fontSize={['1rem', '1rem', '2rem', '2rem']}>No hay ciudades</Heading>
      </Flex>
    )
  }
}

export default Cards