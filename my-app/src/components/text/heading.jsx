
import React from 'react';
import { css } from '@emotion/css';

const Heading = ({ content, style }) => {
  const defaultStyle = css`
    font-size: 24px;
    @media (min-width: 768px) {
      font-size: 32px;
    }
    @media (min-width: 1024px) {
      font-size: 40px;
    }
    color: black;
    margin: 20px 0;
  `;

  return (
    <h1 className={`${defaultStyle} ${css(style)}`}>
      {content}
    </h1>
  );
};

export default Heading;
