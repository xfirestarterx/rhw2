import React from 'react';
import PropTypes from 'prop-types';

const Center = ({ children }) => <div className="Center">{children}</div>;

Center.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Center;
