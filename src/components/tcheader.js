import React from 'react';

export const ThemeChangerHeader = function(props) {
  let style = props.style;
  return (
    <h1 id="tcheader" style={style} className="font_manaspace">Change the theme</h1>
  );
};
