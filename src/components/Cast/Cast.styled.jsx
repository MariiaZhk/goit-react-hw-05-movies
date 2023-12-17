import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 60px);
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 40px;
  margin-top: 20px;
  padding: 0;
`;

export const CastItem = styled.li`
  border-radius: 2px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CastImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const CastTitle = styled.h3`
  display: block;
  margin-top: 15px;
  height: 40px;
  overflow: hidden;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: #9f9f9f;
`;
