import React from 'react';
import styles from './LabeledDropdown.styl';
import PropTypes from 'prop-types';

const LabeledDropdown = ({ labelText, optionText }) => {
  return (
    <div className={styles.LabeledDropdown}>
      {labelText && <label className={styles.Label}>{labelText}</label>}
      {optionText && <span className={styles.Option}>{optionText}</span>}
    </div>
  );
};

LabeledDropdown.propTypes = {
  labelText: PropTypes.string,
  optionText: PropTypes.string
};

export default LabeledDropdown;
