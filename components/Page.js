import { keyframes } from '@stitches/react';
import { styled } from '../stitches.config';

const drop = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-20px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const Container = styled('div', {
  minHeight: 'calc(100vh - 4rem)',
  maxWidth: 1224,
  margin: 'auto',
  padding: '$6',
  paddingBottom: '120px',
  animation: `${drop} 200ms ease`,
});

export default function Page({ children }) {
  return <Container>{children}</Container>;
}
