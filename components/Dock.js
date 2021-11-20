import { faCode, faDiceTwo, faHome } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from '@stitches/react';
import { useRouter } from 'next/dist/client/router';
import { styled } from '../stitches.config';
import DockLink from './DockLink';

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(50px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const StyledDock = styled('div', {
  backgroundColor: '#fff',
  position: 'fixed',
  left: 0,
  right: 0,
  height: 72,
  width: '90%',
  maxWidth: 768,
  margin: 'auto',
  padding: 12,
  border: '1px solid $gray300',
  borderRadius: 20,
  boxShadow: '$large',
  animation: `${fadeIn} .5s ease`,
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',

  variants: {
    bottom: {
      1: { bottom: 10 },
      2: { bottom: 30 },
    },
  },
});

const Separator = styled('hr', {
  backgroundColor: '$gray300',
  border: 'none',
  height: 48,
  width: 1,
  margin: '0 0 0 10px',
});

export default function Dock() {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <StyledDock bottom={{ '@initial': 1, '@bp2': 2 }}>
      <DockLink href="/" icon={faHome} isActive={isActive('/')} />
      <DockLink href="/toka" icon={faDiceTwo} isActive={isActive('/toka')} />
      <Separator />
      <DockLink type="github" />
    </StyledDock>
  );
}
