import React from 'react'
import { Container, Spacer, Table, Text, Button, Card} from '@nextui-org/react'


function Devices() {
    
    return (
    <Container center>
      <Card bordered hoverable clickable shadow={false} css={{ mw: "400px" }}>
      <form action="/api/form" method="post">
      
      <label for="deviceName">IoT Device name:</label>
      <Text h6 size={15} color="black" css={{ m: 0 }}><input type="text" id="deviceName"    name="deviceName" required placeholder='Garden Sensor' />
      </Text>
      <Spacer y={1} />

      <label for="deviceId">Device ID:</label>
      <Text h6 size={15} color="black" css={{ m: 0 }}>
      <input type="text" id="deviceId" name="deviceId" required placeholder='001' />
      </Text>
      <Spacer y={1} />

      <label for="description">Device Description:</label>
      <Text h6 size={15} color="black" css={{ m: 0 }}>
      <input type="text" id="description"     name="description" placeholder="E.g. temp, humidity, soil moisture" />
      </Text>
      <Spacer y={1} />

      
      <label for="deviceLocation">Device Location (City):</label>
      <Text h6 size={15} color="black" css={{ m: 0 }}>
      <input type="text" id="deviceLocation" name="deviceLocation" placeholder='Austin'/>
      </Text>
      <Spacer y={1} />
      <Button type="submit" color="gradient">Add Device</Button>
      </form>
      </Card>
    </Container>
  )}
  
  export default Devices