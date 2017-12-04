import React from 'react';
import { NextButton } from './nextbutton';
import { PrevButton } from './prevbutton';
import { ThemeChangerHeader } from './tcheader';

export const ThemeChanger = function(props) {
  let clickNext = props.clickNext;
  let clickPrev = props.clickPrev;
  let style = props.style;
  return (
    <div className="theme_changer flex-container">
      <div className="theme_changer_inner">
        <PrevButton onClick={clickPrev}/>
        <ThemeChangerHeader style={style}/>
        <NextButton onClick={clickNext} />
      </div>
    </div>
  );
};
