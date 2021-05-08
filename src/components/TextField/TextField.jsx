import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.styl';

const TextField = ({
  placeholder, id, fieldProps = {}, dataTestId = '',
}) => (
  <input
    {...fieldProps}
    id={id}
    className={styles.TextField}
    type="text"
    data-testid={dataTestId}
    placeholder={placeholder}
  />
);

TextField.propTypes = {
  dataTestId: PropTypes.string,
  fieldProps: PropTypes.object,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default TextField;
