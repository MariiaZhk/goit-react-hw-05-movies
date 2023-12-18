import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  position: absolute;
  padding-bottom: 40px;
  padding: 0 20px;
  margin-top: 80px;
  padding-bottom: 100px;
`;

export const MainTitle = styled.h1`
  display: inline-block;
  margin-top: 30px;
  font-size: 40px;
  line-height: 45px;
  font-weight: 800;
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: self-start;
  margin-top: 40px;
  width: 70%;
`;
export const MovieInfoWrap = styled.div`
  width: 100%;
  float: right;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const MovieAddInfoWrap = styled.div`
  margin-top: 50px;
`;

export const AddInfoList = styled.ul`
  display: flex;
  justify-content: start;
`;

export const LinkStyled = styled(NavLink)`
  line-height: 50px;
  padding-right: 20px;
  color: #9f9f9f;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: underline;
  transition: all 0.3s;

  &.active,
  &:hover {
    color: #ca563f !important;
  }
`;

export const MovieDetailsPoster = styled.img`
  width: 250px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(215, 212, 212, 0.323),
    0 6px 20px 0 rgba(165, 164, 164, 0.19);
`;

export const MovieDetailsTitle = styled.h2`
  padding: 10px 20px 0;
  font-size: 30px;
  display: block;
`;
export const GoBackBtn = styled.button`
  display: block;
  width: 250px;
  height: 40px;
  background: #ca563f;
  color: #fff;
  text-shadow: none;
  font-size: 18px;
  border: 1px solid #444;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(4, 162, 220, 0.5);
`;

export const NotFoundWrap = styled.div`
  margin-top: 100px;
`;

export const NotFoundText = styled.h2`
  font-size: 28px;
  color: #ca563f;
`;
