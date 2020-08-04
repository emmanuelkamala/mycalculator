import React, { Component } from 'react';

class Button extends Component {
  render() {
    const test = this.props;
    return (
    <div>{ test.label }</div>
    );
  }
}

export default Button;