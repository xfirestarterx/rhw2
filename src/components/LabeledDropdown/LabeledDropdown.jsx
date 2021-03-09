import React, { useState } from 'react';
import styles from './LabeledDropdown.styl';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';

const LabeledDropdown = ({ labelText, optionsList, width }) => {
  return (
    <div className={styles.LabeledDropdown}>
      { labelText && <div className={styles.Label}>{labelText}</div> }
      <Dropdown settings={{optionsList, width}} />
    </div>
  );
};

LabeledDropdown.propTypes = {
  labelText: PropTypes.string,
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    }).isRequired
  ),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.string
};

export default LabeledDropdown;
