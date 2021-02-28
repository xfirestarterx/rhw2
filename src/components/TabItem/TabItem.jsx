import React from 'react';
import PropTypes from 'prop-types';

const TabItem = ({ title }) => <div className="TabItem">{title}</div>;

TabItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default TabItem;
