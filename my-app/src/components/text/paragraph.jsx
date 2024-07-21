
import React from 'react';
import { css } from '@emotion/css';

const Paragraph = ({ content, style }) => {
  const defaultStyle = css`
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
    @media (min-width: 1024px) {
      font-size: 20px;
    }
    color: black;
    margin: 10px 0;
  `;

  return (
    <p className={`${defaultStyle} ${css(style)}`}>
      {content}
    </p>
  );
};

export default Paragraph;
