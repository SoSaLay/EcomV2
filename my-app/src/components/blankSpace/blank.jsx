import React from 'react';

const BlankSpace = ({ height = '100px', width = '100%', backgroundColor = '#eff6f5' }) => {
  const style = {
    backgroundColor,
    height,
    width,
  };

  return <div style={style}></div>;
};

export default BlankSpace;