import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const styles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#232323',
    borderColor: '#000',
    color: '#555'
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#232323',
    color: '#555'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff'
  }),
  option: () => ({
    padding: 10,
    ':hover': {
      backgroundColor: '#ccc'
    }
  })
}

const Dropdown = ({ settings: { optionsList, width, onChange = null } }) => {

  if (width) {
    styles.container = (provided) => ({
      ...provided,
      width
    });
  }

  return <Select styles={styles} options={optionsList} onChange={(data) => onChange(data)} />;
}

Dropdown.propTypes = {
  settings: PropTypes.shape({
    optionsList: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
  })
}

export default Dropdown;
