import React from 'react';
import PropTypes from 'prop-types';

const button = (props) => {
    return <div className="button"> { props.name } </div>;
}

button.propTypes = { name: PropTypes.string };

export default button;