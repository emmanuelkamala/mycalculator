import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <div className="button">{ this.props.label }</div>
    );
  }
}

Button.propTypes = { label: PropTypes.string };

export default Button;