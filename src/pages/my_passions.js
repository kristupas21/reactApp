import React from 'react';

export const MyPassions = (props) => {
  let src = require("../images/profile.jpg");
  return (
    <div id="display_inner">
      <div className="photo_container border_shade">
        <img src={src} />
      </div>
      <div className="text_container">
        <h1>My passions</h1>
        <br />
        <p>Throughout my life, I developed a bunch of passions.. That includes listening and creating music, playing different sports (basketball turned out to be most interesting), and of course, the passion of computers and technology. </p>
        <br />
        <p>I am writing this text just to see, if the scrollbar is hidden, and the scroll actually works itself. We plan a lot of great things here to do, so I have to make sure everything is corresponding well.</p>
        <br />
        <p>Turns out, we have to put a little more text to this paragraph, because the content still is visible. Let us try now and see if it works already!</p>
      </div>

    </div>
  );
};
