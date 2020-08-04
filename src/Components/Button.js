import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        {this.props.label}
      </div>
    );
  }
}

export default Button;