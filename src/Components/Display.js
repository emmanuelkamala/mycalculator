import React from 'react';
import PropTypes from 'prop-types';

const display = (props) => <div className="Display"> { props.result } </div>;

display.propTypes = { result: PropTypes.number };

export default display;