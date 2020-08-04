import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonPanel extends Component {
  render() {
    return <div className="Button-Panel">{ this.props.children }</div>;
  }
}

ButtonPanel.propTypes = {
  children: PropTypes.string
};

export default ButtonPanel;