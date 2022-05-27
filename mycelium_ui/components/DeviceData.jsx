import React, { useEffect, useState } from 'react'
import { Container, Spacer, Table, Text, Card} from '@nextui-org/react'

const DeviceData = (props) => {
  const data = props.data ? props.data : "waiting...";

  console.log("props: ", props);
  console.log(`data.value: ${data.value}`);

  console.log(`data.deviceNum: ${data.deviceNum}`);

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

  const rowsArr = [
    {
      key: "1",
      deviceName: "Device 1",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "92 (F)",
      soil_moisture: "waiting...",
      rH: "85%",
      status: "Active",
    },
    {
      key: "2",
      deviceName: "Device 2",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "93 (F)",
      soil_moisture: "waiting...",
      rH: "80%",
      status: "Active",
    },
    {
      key: "3",
      deviceName: "Device 3",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "93 (F)",
      soil_moisture: "waiting...",
      rH: "85%",
      status: "Active",
    },
    {
      key: "4",
      deviceName: "Device 4",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "94 (F)",
      soil_moisture: "waiting...",
      rH: "80%",
      status: "Active",
    },
    {
      key: "5",
      deviceName: "Device 5",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "93 (F)",
      soil_moisture: "waiting...",
      rH: "85%",
      status: "Active",
    },
    {
      key: "6",
      deviceName: "Device 6",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "93 (F)",
      soil_moisture: "waiting...",
      rH: "80%",
      status: "Active",
    }
  ];

  const communityRows = [
    {
      key: "1",
      deviceName: "Device 1",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "92 (F)",
      soil_moisture: `${data.value} (${data.unit})`,
      rH: "85%",
      status: "Active",
    },
    {
      key: "2",
      deviceName: "Device 2",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "93 (F)",
      soil_moisture: `${data.value} (${data.unit})`,
      rH: "80%",
      status: "Active",
    },
    {
      key: "3",
      deviceName: "Device 3",
      coordinates: "30 (Lat), -97 (Long)",
      temperature: "93 (F)",
      soil_moisture: `${data.value} (${data.unit})`,
      rH: "85%",
      status: "Active",
    }
  ]

  const [rows, setRows] = useState(rowsArr);

  console.log("data.deviceNum: ", data.deviceNum);
  console.log("rows: ", rows[1]);

  // Random number here.
  useEffect(() => {
    if (data != undefined) {
      const deviceNum = Math.floor(Math.random() * 6 + 1);
      let index = deviceNum;
      console.log("index: ", index);
      setRows(
        rows.map((row) => 
          (parseInt(row.key) === index) 
            ? { ...row, soil_moisture:`${data.value} (${data.unit})`}
            : { ...row }
        )
      );
    }

  });

  return (
      
<Container fluid>
  <Card>
    <Spacer y={1} />
        <Text size="2em">{props.title}</Text>
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
      <Table.Body items={props.title === "My Devices" ? rows : communityRows}>
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