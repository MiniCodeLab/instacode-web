import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { Button } from '../ui/Button';
import { InstaNavLink } from '../ui/InstaLink';
import { NavbarWrapper, LinksWrapper } from '../ui/Navbar';
import Image from './Image';

const Navbar = () => {
  const { authenticated, logout } = useContext(AuthContext);

  return authenticated ? (
    <NavbarWrapper>
      <Link to="/">
        <Image src="/logo-instacode.png" alt="logo-instacode" size="s" />
      </Link>

      <LinksWrapper>
        <InstaNavLink to="/create/snippet">Crear Snippet</InstaNavLink>

        <Button onClick={logout} variant="grey">
          Logout
        </Button>
      </LinksWrapper>
    </NavbarWrapper>
  ) : null;
};

export default Navbar;
