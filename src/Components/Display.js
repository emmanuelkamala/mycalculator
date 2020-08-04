import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ output, operator }) => (
  <div className="display">
    <div className="label">{ operator }</div>
    <div className="output">{ output }</div>
  </div>
);

Display.defaultProps = {
  output: '0',
  operator: '=',
};
Display.propTypes = {
  output: PropTypes.string,
  operator: PropTypes.string,
};
export default Display;