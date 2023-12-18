import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  margin-top: 40px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ReviewItem = styled.li`
  display: block;
  max-height: 300px;
  overflow: auto;
`;

export const ReviewTitle = styled.h3`
  padding-bottom: 5px;
  font-weight: 700;
  font-size: 18px;
`;
