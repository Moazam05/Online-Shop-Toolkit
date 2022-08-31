import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      404 Page Not Found{' '}
      <button
        type='button'
        class='btn btn-danger'
        onClick={() => navigate('/')}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
