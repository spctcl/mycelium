import { Card, Col, Text } from "@nextui-org/react";

export const Card2 = () => (
  <Card width="100%" bordered cover hoverable clickable shadow={false} >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Data Marketplace for Growers
        </Text>
        <Text h4 color="white">
          Find, Share, Collaborate
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