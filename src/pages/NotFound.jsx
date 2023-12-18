import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>This page is not available!</h2>
      <Link to="/">Please, go home!</Link>
    </div>
  );
};

export default NotFound;
