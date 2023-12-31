import { Outlet } from 'react-router-dom';
import {
  Footer,
  Header,
  LoaderText,
  NavLinkStyled,
  NavStyled,
} from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Header>
        <NavStyled>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </NavStyled>
      </Header>

      <main>
        <Suspense fallback={<LoaderText>Loading...</LoaderText>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
