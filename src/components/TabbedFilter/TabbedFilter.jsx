import React from 'react';
import PropTypes from 'prop-types';
import TabItem from '../TabItem/TabItem';

const TabbedFilter = ({ items = [] }) => items?.map(({ id, title }) => <TabItem key={id} title={title} />);

TabbedFilter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  )
};

export default TabbedFilter;
