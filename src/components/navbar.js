import React from 'react';
import { NavbarMenu } from './navbar_menu';

export class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar border_shade">
          <NavbarMenu />
        </nav>
    );
  }
}
