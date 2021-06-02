import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const noop = () => {};

const styles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#232323',
    borderColor: '#000',
    color: '#555',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#232323',
    color: '#555',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  option: () => ({
    padding: 10,
    ':hover': {
      backgroundColor: '#ccc',
    },
  }),
};

const Dropdown = ({
  settings: {
    optionsList, width, onChange = noop, isMulti = false, mapToStateName, value,
  },
}) => {
  if (width) {
    styles.container = (provided) => ({
      ...provided,
      width,
    });
  }

  return <Select value={value} isMulti={isMulti} styles={styles} options={optionsList} onChange={(value, meta) => onChange(value, meta, mapToStateName)} />;
};

Dropdown.propTypes = {
  settings: PropTypes.shape({
    optionsList: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    isMulti: PropTypes.bool,
    mapToStateName: PropTypes.string,
  }),
};

export default Dropdown;
