import React from 'react';
import PropTypes from 'prop-types';

const noop = () => { };

const GenericInput = ({
    type = 'text',
    val,
    placeholder = '',
    className = '',
    id = '',
    onChange = noop,
    mapToStateName
  }) => {
  return <input
    {...(val || val === '' ? { value: val } : {})}
    type={type}
    placeholder={placeholder}
    className={className}
    id={id}
    onChange={(e) => onChange(e.target.value, e, mapToStateName)} />;
}

GenericInput.propTypes = {
  type: PropTypes.string,
  val: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  mapToStateName: PropTypes.string
}

export default GenericInput;
