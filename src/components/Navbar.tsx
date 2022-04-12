import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Button } from '../ui/Button';
import { NavbarWrapper } from '../ui/Navbar';
import Image from './Image';

const Navbar = () => {
  const { authenticated, logout } = useContext(AuthContext);

  return authenticated ? (
    <NavbarWrapper>
      <Image src="/logo-instacode.png" alt="logo-instacode" size="s" />

      <Button onClick={logout} variant="grey">
        Logout
      </Button>
    </NavbarWrapper>
  ) : null;
};

export default Navbar;
