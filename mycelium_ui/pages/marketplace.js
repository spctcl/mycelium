import { Container, Spacer, Table, Text, Card, Grid} from '@nextui-org/react'
import {Card1} from './marketplacedata'
import {Card2} from './marketplacedata2'
export default function Marketplace() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <Card1 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card2 />
      </Grid>
    </Grid.Container>
  );
}