import React, { Component } from 'react';

class ButtonPanel extends Component {
  render() {
    return <div className="Button-Panel"> {this.props.children} </div>
  };
};
export default ButtonPanel;