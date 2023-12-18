import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundText, NotFoundWrap } from './Pages.styled';

const NotFound = () => {
  return (
    <NotFoundWrap>
      <NotFoundText>Page not found! Please, go home!</NotFoundText>
    </NotFoundWrap>
  );
};

export default NotFound;
