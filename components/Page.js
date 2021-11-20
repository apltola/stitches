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
  animation: `${drop} 200ms ease`,

  variants: {
    padding: {
      1: { padding: '$6 $3 120px $3' },
      2: { padding: '$6 $6 120px $6' },
    },
  },
});

export default function Page({ children }) {
  return (
    <Container padding={{ '@initial': 1, '@bp1': 2 }}>{children}</Container>
  );
}
