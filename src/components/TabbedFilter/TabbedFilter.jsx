import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TabbedFilter.styl';
import TabItem from '../TabItem/TabItem';

const TabbedFilter = ({ items = [] }) => {
  if (!items?.length) return null;

  const [itemsList, setItemsList] = useState(items);

  const setActiveTab = (id) => {
    const updatedList = itemsList.map(item => {
      return item.id === id ?
        { ...item, isActive: true } :
        { ...item, isActive: false }
    });

    setItemsList(updatedList);
  }

  return (
    <div className={styles.TabbedFilter}>
      {itemsList.map(({ id, title, isActive }) => <TabItem onClick={setActiveTab} key={id} title={title} isActive={isActive} id={id} />)}
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
