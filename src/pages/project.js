import React from 'react';

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: "" };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    this.setState({ markdown: e.target.value });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Markdown</h1>
          <textarea value={this.state.markdown} onChange={this.handleOnChange} rows="10" style={{width: "100%"}}/>
        </div>
        <div className="col-md-6">
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
        </div>
      </div>
    );
  }
}
