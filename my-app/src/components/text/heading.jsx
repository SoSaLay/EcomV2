import React from 'react';
import './Heading.scss';

const Heading = ({ content, className }) => {
  return (
    <h1 className={`heading ${className || ''}`}>
      {content}
    </h1>
  );
};

export default Heading;
