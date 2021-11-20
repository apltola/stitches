import Link from 'next/link';
import { styled } from '../stitches.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GithubLogo from './GithubLogo';

const StyledLink = styled('a', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '23%',
  width: 48,
  height: 48,
  background: 'hsl(0 0% 95.1%)',
  backgroundImage:
    'linear-gradient(45deg, hsl(0 0% 97.3%), hsl(0 0% 90.9%), hsl(0 0% 97.3%), hsl(0 0% 90.9%))',
  backgroundSize: '200% 100%',
  transitionDuration: '100ms',
  transitionTimingFunction: 'ease-in-out',
  transitionProperty: 'transform box-shadow',

  '&:not(:first-child)': {
    marginLeft: 10,
  },

  '&:hover': {
    transform: 'scale(1.1) translateY(-3px)',
  },

  '&[isactive="true"]::before': {
    position: 'absolute',
    bottom: -9,
    left: 0,
    right: 0,
    margin: 'auto',
    content: '•',
    lineHeight: '4px',
    textAlign: 'center',
    color: 'hsl(0 0% 52.3%)',
    fontSize: 24,
    paddingRight: 2,
    width: 8,
    height: 8,
  },
});

export default function DockLink({ type, href, icon, isActive = false }) {
  if (type === 'github') {
    return (
      <StyledLink href="https://github.com/apltola">
        <GithubLogo fill="hsl(0 0% 52.3%)" />
      </StyledLink>
    );
  }

  return (
    <Link href={href}>
      <StyledLink isactive={isActive.toString()}>
        <FontAwesomeIcon
          icon={icon}
          color="hsl(0 0% 52.3%)"
          style={{ width: 24, height: 24 }}
        />
      </StyledLink>
    </Link>
  );
}
