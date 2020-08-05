import React from 'react';
import PropTypes from 'prop-types';

const button = (props) => <div className="button"> { props.name } </div>;

button.propTypes = { 
  name: PropTypes.string.isRequired,
  color: PropTypes.bool.isRequired,
  wide: PropTypes.bool.isRequired
 };

export default button;