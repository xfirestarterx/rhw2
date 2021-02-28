import React from 'react';
import PropTypes from 'prop-types';

const FormRow = ({ children }) => {
  return (
    <div className="FormRow">
      {children}
    </div>
  );
};

FormRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default FormRow;
