// src/components/Subheading.js
import React from 'react';
import { css } from '@emotion/css';

const Subheading = ({ content, style }) => {
  const defaultStyle = css`
    font-size: 20px;
    @media (min-width: 768px) {
      font-size: 28px;
    }
    @media (min-width: 1024px) {
      font-size: 34px;
    }
    color: black;
    margin: 15px 0;
  `;

  return (
    <h2 className={`${defaultStyle} ${css(style)}`}>
      {content}
    </h2>
  );
};

export default Subheading;
