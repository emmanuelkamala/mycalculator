import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ outcome, operator }) => (
  <div className="display">
    <div className="symbol">{ operator }</div>
    <div className="outcome">{ outcome }</div>
  </div>
);

Display.defaultProps = {
  outcome: '0',
  operator: '=',
};
Display.propTypes = {
  outcome: PropTypes.string,
  operator: PropTypes.string,
};
export default Display;
