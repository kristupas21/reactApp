import React from 'react';

export const NextButton = function(props) {
  let onClick = props.onClick;
  return (
    <button onClick={onClick}>NEXT</button>
  );
};
