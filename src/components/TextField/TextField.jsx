import React from 'react';
import styles from './TextField.styl';
import PropTypes from 'prop-types';

const TextField = ({ placeholder, id, fieldProps = {} }) => {
  return <input
    {...fieldProps}
    id={id}
    className={styles.TextField}
    type='text'
    placeholder={placeholder} />
}

TextField.propTypes = {
  fieldProps: PropTypes.object,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
};

export default TextField;
