import styled from 'styled-components';

export const Section = styled.section`
  position: absolute;
  width: 100%;
  padding-bottom: 40px;
  margin: 20px;
  margin-top: 50px;
`;

export const MainTitle = styled.h1`
  display: inline-block;
  margin-top: 20px;
  color: #fff;
  font-size: 40px;
  line-height: 45px;
  font-weight: 800;
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: self-start;
  margin-top: 30px;
  width: 90%;
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

export const MovieDetailsPoster = styled.img`
  width: 350px;
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

export const Text = styled.p`
  font-size: 22px;
  color: #9f9f9f;
`;
