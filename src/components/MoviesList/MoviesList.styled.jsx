import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 60px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  margin-top: 30px;
  padding: 0;
`;

export const MovieItemStyled = styled.li`
  border-radius: 2px;
  padding-bottom: 5px;
  box-shadow: 0 4px 8px 0 rgba(215, 212, 212, 0.323),
    0 6px 20px 0 rgba(165, 164, 164, 0.19);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const MoviePosterStyled = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const MovieTitle = styled.h2`
  display: block;
  margin-top: 15px;
  height: 40px;
  overflow: hidden;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: #9f9f9f;
`;
