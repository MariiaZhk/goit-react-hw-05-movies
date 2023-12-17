import { Outlet } from 'react-router-dom';
import { Container, Header, NavLinkStyled, NavStyled } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <NavStyled>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          {/* <NavLink to="/movies/:movieId">MovieDetails</NavLink> */}
        </NavStyled>
      </Header>

      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </Container>
  );
};

export default Layout;
