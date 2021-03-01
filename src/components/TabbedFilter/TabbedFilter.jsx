import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabbedFilter.styl';
import TabItem from '../TabItem/TabItem';

const TabbedFilter = ({ items = [] }) => {
  if (!items?.length) return null;

  return (
    <div className={styles.TabbedFilter}>
      {items.map(({ id, title, isActive }) => <TabItem key={id} title={title} isActive={isActive} />)}
    </div>
  );
};

TabbedFilter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isActive: PropTypes.bool
    })
  )
};

export default TabbedFilter;
