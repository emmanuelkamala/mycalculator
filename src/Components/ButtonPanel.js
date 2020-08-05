import React from 'react';
import PropTypes from 'prop-types';

const buttonpanel = (props) => <div className="Button-Panel"> { props.children } </div>;

buttonpanel.propTypes = { children: PropTypes.array };

export default buttonpanel;