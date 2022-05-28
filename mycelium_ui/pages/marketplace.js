import { Container, Spacer, Table, Text, Card, Grid} from '@nextui-org/react'
import MarketplaceCard1 from '../components/MarketplaceCard1'
import MarketplaceCard2 from '../components/MarketplaceCard2'
export default function Marketplace() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <MarketplaceCard1 />
      </Grid>
      <Grid xs={12} sm={4}>
        <MarketplaceCard2 />
      </Grid>
    </Grid.Container>
  );
}