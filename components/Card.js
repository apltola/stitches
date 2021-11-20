import { keyframes } from '@stitches/react';
import { styled } from '../stitches.config';

// const fade = keyframes({
//   '0%': {
//     opacity: 0,
//     transform: 'translateY(-20px)',
//   },
//   '100%': {
//     opacity: 1,
//     transform: 'translateY(0)',
//   },
// });

const StyledCard = styled('article', {
  width: '100%',
  // minWidth: 320,
  minHeight: 100,
  backgroundColor: '#fff',
  boxShadow: '$medium',
  border: '1px solid $gray300',
  padding: '1em',
  borderRadius: 3,
  // animation: `${fade} 200ms ease`,
  transitionDuration: '200ms',
  transitionTimingFunction: 'ease',
  transitionProperty: 'transform box-shadow',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '$hover',
  },
});

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
