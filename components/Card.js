import { styled } from '../stitches.config';

const StyledCard = styled('article', {
  width: '100%',
  minHeight: 100,
  backgroundColor: '#fff',
  boxShadow: '$medium',
  border: '1px solid $gray300',
  borderRadius: 3,
  transitionDuration: '200ms',
  transitionTimingFunction: 'ease',
  transitionProperty: 'transform box-shadow',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '$hover',
  },
});

export default function Card({ children, padding = '1rem' }) {
  return <StyledCard css={{ padding }}>{children}</StyledCard>;
}
