import { styled } from '../stitches.config';

const StyledHeader = styled('header', {
  height: '4rem',
  backgroundColor: '#FFF',
  paddingX: '$3',
  border: '1px solid $gray300',
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  zIndex: 10,
});

const Brand = styled('h1', {
  fontFamily: 'Walsheim',
  fontWeight: 800,
  fontSize: 'x-large',
});

export default function Header() {
  return (
    <StyledHeader>
      <Brand>Saitti</Brand>
    </StyledHeader>
  );
}
