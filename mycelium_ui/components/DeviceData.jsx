import React from 'react'
import { Container, Spacer, Table, Text, Card} from '@nextui-org/react'

const DeviceData = (props) => {
  const data = props.data ? props.data : "test";
  console.log(`data: ${data.value}`);

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
      key: "soil_moisture",
      label: "Soil Moisture"
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
      deviceName: "Device 1",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "97 (F)",
      soil_moisture: `${data.value} (${data.unit})`,
      rH: "85%",
      status: "Active",
    },
    {
      key: "2",
      deviceName: "Device 2",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "92 (F)",
      soil_moisture: `${data.value} (${data.unit})`,
      rH: "80%",
      status: "Active",
    }
  
  ];
  return (
      
<Container fluid>
  <Card>
    <Spacer y={1} />
        <Text size="2em">My Devices</Text>
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