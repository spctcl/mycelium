import { Card, Col, Text } from "@nextui-org/react";

export const Card1 = () => (
  <Card width="100%" bordered cover hoverable clickable shadow={false} >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          IoT Devices and Sensors
        </Text>
        <Text h4 color="white">
          A variety of boards and sensors to cover your needs
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-3.jpeg"
      height={340}
      width="100%"
      alt="Card image background"
    />
  </Card>
);