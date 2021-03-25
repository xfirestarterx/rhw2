import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterMovies } from 'store/actions';
import PropTypes from 'prop-types';
import styles from './TabbedFilter.styl';
import TabItem from '../TabItem/TabItem';

const TabbedFilter = ({ items = [], filterMovies }) => {
  if (!items?.length) return null;

  items.map((item, i) => ({...item.id = i}));

  const [itemsList, setItemsList] = useState(items);

  const setActiveTab = (id) => {
    const updatedList = itemsList.map(item => {
      return item.id === id ?
        { ...item, isActive: true } :
        { ...item, isActive: false }
    });

    setItemsList(updatedList);
  }

  const handleClick = (id, title) => {
    setActiveTab(id);
    filterMovies(title);
  }

  return (
    <div className={styles.TabbedFilter}>
      {itemsList.map(({ title, isActive }, i) => <TabItem onClick={handleClick} key={i} title={title} isActive={isActive} id={i} />)}
    </div>
  );
};

TabbedFilter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isActive: PropTypes.bool
    })
  )
};

export default connect(null, { filterMovies })(TabbedFilter);
