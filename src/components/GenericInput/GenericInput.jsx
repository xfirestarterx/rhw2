import React from 'react';
import PropTypes from 'prop-types';

const GenericInput = ({
  fieldProps = {},
  type = 'text',
  placeholder = '',
  className = '',
  id = '',
}) => (
  <input
    {...fieldProps}
    type={type}
    placeholder={placeholder}
    className={className}
    id={id}
  />
);

GenericInput.propTypes = {
  fieldProps: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default GenericInput;
