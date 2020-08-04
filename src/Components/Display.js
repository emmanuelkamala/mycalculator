import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  static defaultProps = { name: 'My Calculator' };

  render() {
    return <div className="Display"><h1> { this.props.name } </h1></div>;
  }
}

Display.propTypes = { name: PropTypes.string };

export default Display;