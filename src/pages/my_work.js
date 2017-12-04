import React from 'react';
import { Work } from '../components/work';
import ejImage from "../images/ej_thumbnail.jpg";
import nbaImage from "../images/nba.jpg";

export const MyWork = (props) => {
  return (
    <div id="display_inner">
      <Work number="0" link="http://www.ejaccessories.lt" text="ejaccessories.lt" img={ejImage}/>
      <Work number="1" link="http://www.nba.com" text="nba.com" img={nbaImage}/>
      <Work number="2" link="http://www.whatson.ae" text="whatson.ae" img="http://whatson.ae/dubai/wp-content/uploads/2016/08/img-world-of-adventure-10.jpg"/>
    </div>
  );
};
