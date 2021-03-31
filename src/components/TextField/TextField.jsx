import React from 'react';
import styles from './TextField.styl';
import PropTypes from 'prop-types';

const noop = () => { };

const TextField = ({ placeholder, id, val, onChange = noop, mapToStateName }) => {
  return <input
    {...(val || val === '' ? { value: val } : {})}
    onChange={(e) => onChange(e.target.value, e, mapToStateName)}
    id={id}
    className={styles.TextField}
    type='text'
    placeholder={placeholder} />
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  val: PropTypes.any,
  onChange: PropTypes.func,
  mapToStateName: PropTypes.string
};

export default TextField;
