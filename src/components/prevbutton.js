import React from 'react';

export const PrevButton = function(props) {
  let onClick = props.onClick;
  return (
    <button onClick={onClick}>PREV</button>
  );
};
