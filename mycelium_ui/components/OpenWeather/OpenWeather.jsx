import React from 'react'
import { Container, Spacer, Text } from '@nextui-org/react'
import WeatherButton from '../WeatherButton'


const OpenWeather = () => {
  
  return (
      
    <Container fluid
    css={{ 
      borderRadius: '$md', // radii.xs
      border: '$space$1 solid transparent'
    }}
    >
    <Spacer y={2} />
        <Text size="2em">OpenWeather API</Text>
        <Spacer y={1} />
        <WeatherButton />
    </Container>
  )
}

export default OpenWeather