import React, { Component } from 'react';

class ButtonPanel extends Component {
  render() {
  const btn = this.props;
  return <div className="Button-Panel">{ btn.children }</div>;
  }
}
export default ButtonPanel;