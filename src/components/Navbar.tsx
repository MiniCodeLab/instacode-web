import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { Button } from '../ui/Button';
import { InstaNavLink } from '../ui/InstaLink';
import { NavbarWrapper, LinksWrapper } from '../ui/Navbar';

const Navbar = () => {
  const { authenticated, logout } = useContext(AuthContext);

  return authenticated ? (
    <NavbarWrapper>
      <Link to="/">
        <img src="/logo-instacode.png" alt="logo instacode" />
      </Link>

      <LinksWrapper>
        <InstaNavLink to="/create/snippet">Crear Snippet</InstaNavLink>
        <InstaNavLink to="/edit/profile">Editar Perfil</InstaNavLink>

        <Button data-testid="logout" className="logout" onClick={logout} variant="grey">
          Logout
        </Button>
      </LinksWrapper>
    </NavbarWrapper>
  ) : null;
};

export default Navbar;
