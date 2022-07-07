import React from 'react'
import Card from '../components/Card'
import { Grid, Heading } from '@chakra-ui/react'
const Cards = ({ data }) => {

  if (data.length > 0) {
    return (
      <Grid
        maxW='90%'
        m='0 auto'
        gap='2rem'
        gridTemplateColumns={['repeat(auto-fill, minmax(190px,1fr))', 'repeat(auto-fill, minmax(190px,1fr))', 'repeat(auto-fill, minmax(280px,1fr))', 'repeat(auto-fill, minmax(220px,1fr))']}
      >
        {data.map(data => (
          <Card content={data} key={data.id} id={data.id} />
        ))}
      </Grid>
    )
  } else {
    return <Heading textAlign='center'>No hay ciudades</Heading>
  }
}

export default Cards