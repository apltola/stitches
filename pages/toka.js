import Image from 'next/image';
import { styled } from '../stitches.config';
import Card from '../components/Card';
import Page from '../components/Page';

const IMAGES = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1572859730774-2cb70677d258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1604495772376-9657f0035eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
];

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: 14,
});

const ImageWrapper = styled('div', {
  width: '100%',
  height: 240,
  position: 'relative',

  '& img': {
    borderRadius: 2,
  },
});

const Title = styled('h1', {
  fontFamily: 'Walsheim',
  paddingBottom: '$3',
});

export default function Home() {
  return (
    <Page>
      <Title>Some pictures of fruit</Title>
      <Grid>
        {IMAGES.map((i) => {
          return (
            <Card padding="0" key={i.id}>
              <ImageWrapper>
                <Image src={i.url} layout="fill" objectFit="cover" />
              </ImageWrapper>
            </Card>
          );
        })}
      </Grid>
    </Page>
  );
}
