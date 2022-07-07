import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Cards from './Cards'

const Home = () => {
  const [data, setData] = useState([])
  // console.log(data);
  const getData = (city) => {
    const apiKey = 'c540d1f633d1e86553bf46d84aafd613'
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.main !== undefined) {
          // console.log({ response: response });
          const { country } = response?.sys
          const { speed } = response?.wind
          const { temp_max, temp_min, temp, humidity } = response?.main
          const ciudad = {
            id: response.id,
            name: response.name,
            wind: speed,
            country,
            img: response.weather[0].icon,
            humidity,
            temp: Math.round(temp),
            tempMax: Math.round(temp_max),
            tempMin: Math.round(temp_min),
          };
          console.log(ciudad);
          setData((oldCities) => [ciudad, ...oldCities]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  return (
    <Box>
      <Navbar getData={getData} />
      <Cards data={data} />
    </Box>
  )
}
export default Home