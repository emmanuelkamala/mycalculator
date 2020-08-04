import React, { Component } from 'react';

class Display extends Component {
  render() {
  return <div className="Display"><h1> { this.props.name } </h1></div>;
  }
}

Display.defaultProps = { name: 'My Calculator' };
export default Display;