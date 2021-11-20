import { styled } from '../stitches.config';
import StitchesLogo from '../components/StitchesLogo';
import Card from '../components/Card';
import Page from '../components/Page';

const Text = styled('p', {
  fontFamily: 'Walsheim',
});

const Link = styled('a', {
  textDecoration: 'none',
  color: '$purple600',
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: 14,
});

const LogoWrapper = styled('div', {
  flexShrink: 0,
  display: 'flex',
});

export default function Home() {
  return (
    <Page>
      <Text as="h1" css={{ display: 'flex', alignItems: 'center' }}>
        <LogoWrapper>
          <StitchesLogo />
        </LogoWrapper>
        <span style={{ marginLeft: 5 }}>This site is using Stitches ui</span>
      </Text>
      <Text>
        For full documentation, visit{' '}
        <Link href="https://stitches.dev">stitches.dev</Link>.
      </Text>
      <Grid css={{ marginTop: '2rem' }}>
        <Card>card card card card</Card>
        <Card>card card card card</Card>
        <Card>card card card card</Card>
        <Card>card card card card</Card>
        <Card>card card card card</Card>
        <Card>card card card card</Card>
        <Card>card card card card</Card>
        <Card>card card card card</Card>
      </Grid>
    </Page>
  );
}
