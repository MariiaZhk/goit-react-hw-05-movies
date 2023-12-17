import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 30px;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  box-shadow: 0 4px 8px 0 rgba(215, 212, 212, 0.323),
    0 6px 20px 0 rgba(165, 164, 164, 0.19);
`;

export const NavStyled = styled.nav`
  position: relative;
  display: flex;
  text-align: left;
`;

export const NavLinkStyled = styled(NavLink)`
  line-height: 50px;
  padding: 0 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;

  transition: all 0.3s;

  &.active {
    color: #ca563f !important;
  }
`;

export const Footer = styled.footer``;
