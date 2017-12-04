import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink, HashRouter } from 'react-router-dom';

export const NavbarMenu = (props) => {
 return (
    <ul className="navbar_menu">
      <li><NavLink to="/">so far I</NavLink></li>
      <li><NavLink to="/my_goals">my goals</NavLink></li>
      <li><NavLink to="/my_work">my work</NavLink></li>
      <li><NavLink to="/my_passions">my passions</NavLink></li>
      <li id="project_li"><NavLink to="/project">project</NavLink></li>
    </ul>
  );
};
