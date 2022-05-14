import React from 'react'
import { Container, Spacer } from '@nextui-org/react'
import WeatherButton from '../WeatherButton'


const OpenWeather = () => {
  return (
      
    <Container fluid>
    <Spacer y={2} />
        <div>OpenWeather API/Link Data</div>
    <Spacer y={2} />
        <WeatherButton />
    </Container>
  )
}

export default OpenWeather