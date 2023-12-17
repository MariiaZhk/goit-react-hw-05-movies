import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 0;
`;

export const ReviewItem = styled.li`
  border-radius: 2px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ReviewTitle = styled.h2`
  display: block;
  margin-top: 15px;
  height: 40px;
  overflow: hidden;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: #9f9f9f;
`;
