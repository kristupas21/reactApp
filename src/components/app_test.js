import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";

const Button = function(props) {
  let onClick = props.onClick;
  return (
    <button onClick={onClick}>Next</button>
  );
};
const ButtonRev = function(props) {
  let onClick = props.onClick;
  return (
    <button onClick={onClick}>Prev</button>
  );
};
Button.propTypes = {
  onClick: React.PropTypes.func
};
ButtonRev.propTypes = {
  onClick: React.PropTypes.func
};
let backgroundImages = ['background_retro', 'background_cafe', 'background_hiphop'];
const AppDiv = document.getElementById('app');
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBkg: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickRev = this.handleClickRev.bind(this);
  }
  handleClick() {
    let current = this.state.currentBkg;
    let next = ++current % backgroundImages.length;
    AppDiv.classList.remove(backgroundImages[this.state.currentBkg]);
    AppDiv.classList.add(backgroundImages[next]);
    this.setState({currentBkg: next});
  }
  handleClickRev() {
    let current = this.state.currentBkg;
    let prev = (current + 2) % backgroundImages.length;
    AppDiv.classList.remove(backgroundImages[current]);
    AppDiv.classList.add(backgroundImages[prev]);
    this.setState({currentBkg: prev});
  }

  render() {
      return (
        <div id="container">
        <Button onClick={this.handleClick} />
        <ButtonRev onClick={this.handleClickRev} />
        </div>
      );
  }
}
