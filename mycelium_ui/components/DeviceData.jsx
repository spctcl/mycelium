import React from 'react'
import { Container, Spacer, Table, Text, Card} from '@nextui-org/react'



const DeviceData = () => {
  const columns = [
    {
      key: "deviceName",
      label: "NAME",
    },
    {
      key: "coordinates",
      label: "COORDINATES",
    },
    {
      key: "temperature",
      label: "Temperature",
    },
    {
      key: "rH",
      label: "Relative Humidity",
    },
    { key: "status",
      label: "Status"
    },
  ];
  const rows = [
    {
      key: "1",
      deviceName: "IoT Device #1",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "97 (F)",
      rH: "85%",
      status: "Active",
    },
    {
      key: "2",
      deviceName: "IoT Device #2",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "92 (F)",
      rH: "80%",
      status: "Active",
    }
  
  ];
  return (
      
<Container fluid>
  <Card>
    <Spacer y={1} />
        <Text size="2em">IoT Device Data</Text>
    <Table
      aria-label="Example table with dynamic content"
      css={{
        height: "auto",
        minWidth: "100%",
        
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
        </Table.Body>
        </Table>
  </Card>
</Container>
    )
}

export default DeviceData;