import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ placeholder }) => {
    return <input type='text' placeholder={placeholder} />
};

TextField.propTypes = {
    placeholder: PropTypes.string
};

export default TextField;
