import React from 'react';
import { useLocation } from 'react-router-dom';

const BackButton = () => {
  const location = useLocation();

  const handleClick = () => {
    const { protocol, hostname, port, pathname } = window.location;
    const domain = `${protocol}//${hostname}${port ? `:${port}` : ''}`;
    const newUrl = `${domain}/room-inator/`;
    window.location.href = newUrl;
  };

  return (
    <button className="back-button" onClick={handleClick}>
      &#8592; Go back
    </button>
  );
};

export default BackButton;