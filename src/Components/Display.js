import React, { Component } from 'react';

class Display extends Component {
  static defaultProps = { name: 'My Calculator' };

  render() {
    return <div className="Display"><h1> { this.props.name } </h1></div>;
  }
}

export default Display;