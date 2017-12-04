import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Navbar } from './navbar';
import { Display } from './display';
import { BottomHolder } from './bottom_holder';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
      return (
        <HashRouter>
          <div id="container">
            <Navbar />
            <Display />
            <BottomHolder />
          </div>
        </HashRouter>
      );
  }
}
