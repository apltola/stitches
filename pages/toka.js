import { styled } from '../stitches.config';
import Card from '../components/Card';
import { keyframes } from '@stitches/react';
import Page from '../components/Page';

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: 14,
});

export default function Home() {
  return (
    <Page>
      <Grid>
        <Card>card card </Card>
        <Card>card card </Card>
        <Card>card card </Card>
      </Grid>
    </Page>
  );
}
