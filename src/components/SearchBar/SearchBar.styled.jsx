import styled from 'styled-components';

export const SearchBarWrap = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 60px;
  background: #ca563f;
  color: #fff;
  text-shadow: none;
  font-size: 18px;
  border: 1px solid #444;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  box-shadow: 0 0 10px 0 rgba(4, 162, 220, 0.5);
  background-color: #1f2123;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  height: 60px;
  flex-grow: 1;
  padding: 5px 5px 5px 15px;
  border-radius: 3px;
  background-color: #1f2123;
  outline: none;
  font-size: 18px;
  color: #fff;
  border: 1px solid #444;
`;
