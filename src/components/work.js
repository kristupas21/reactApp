import React from 'react';
import PropTypes from 'prop-types';


export class Work extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
   }

  handleMouseEnter(e) {
    e.target.firstChild.classList.remove("animate_down");
    e.target.firstChild.classList.add("animate_up");
    }
  handleMouseLeave() {
    const currentWork = document.getElementById("display_inner").childNodes[this.props.number];
    currentWork.firstChild.classList.remove("animate_up");
    currentWork.firstChild.classList.add("animate_down");

}
  handleOnClick() {
    window.open(this.props.link);
  }
  render() {
    return (
      <div className="work flex-bottom" onClick={this.handleOnClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={{backgroundImage: "url(" + this.props.img +")"  }}>
        <div className="work_button">{this.props.text}</div>
      </div>
    );
  }
}

Work.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.string
};
