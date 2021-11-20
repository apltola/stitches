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

export default function Header() {
  return (
    <StyledHeader>
      <h2>Saitti</h2>
    </StyledHeader>
  );
}
