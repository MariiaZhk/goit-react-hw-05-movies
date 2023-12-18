import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  box-shadow: 0 4px 8px 0 rgba(215, 212, 212, 0.323),
    0 6px 20px 0 rgba(165, 164, 164, 0.19);
  padding-left: 40px;
`;

export const NavStyled = styled.nav`
  position: relative;
  display: flex;
  text-align: left;
`;

export const NavLinkStyled = styled(NavLink)`
  line-height: 60px;
  padding: 0 20px;
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  transition: all 0.3s;

  &.active {
    color: #ca563f !important;
  }
`;

export const Footer = styled.footer`
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  margin-top: auto;
  min-height: 50px;
  padding: 40px 0 20px 0;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 4px 8px 0 rgba(215, 212, 212, 0.323),
    0 6px 20px 0 rgba(165, 164, 164, 0.19);
`;
export const LoaderText = styled.div`
  margin-top: 70px;
  font-size: 20px;
  color: #ca563f;
`;
