import React from 'react';
import PropTypes from 'prop-types';

const GenericInput = ({ type = 'text', placeholder = '', className = '', id = '' }) => <input type={type} placeholder={placeholder} className={className} id={id} />;

GenericInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string
}

export default GenericInput;
