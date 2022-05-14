import React from 'react'
import  { Card, Text } from '@nextui-org/react'

const WeatherButton = () => {
  const color =[
    "gradient"
  ]

  return (
    <Card clickable bordered color="gradient" css={{ mw: "400px"}}>
        <p>Get Local Weather Data</p>
    </Card>
  )
}

export default WeatherButton