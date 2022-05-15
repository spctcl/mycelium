import React from 'react'
import  { Card, Text } from '@nextui-org/react'

const WeatherButton = () => {
  const color =[
    "gradient"
  ]

  return (
    <Card clickable bordered color="gradient"  css={{ 
      maxWidth: "400px", // space[12]
      borderRadius: '$xs', // radii.xs
      border: '$space$1 solid',
  

      boxShadow: '$md', // shadows.md
      '&:hover': {
        background: '$blue600',
        color: '$white600',
      },
      // '&:active': {
      //   background: 'gradient',
      // },
      // '&:focus': {
      //   borderColor: 'gradient',
      // },
    }}>
        <p>Get Local Weather Data</p>
    </Card>
  )
}

export default WeatherButton