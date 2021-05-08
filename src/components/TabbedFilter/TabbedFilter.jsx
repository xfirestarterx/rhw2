import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMoviesByTerms } from '../../store/actions';
import styles from './TabbedFilter.styl';
import TabItem from '../TabItem/TabItem';

const TabbedFilter = ({ items = [], setMoviesByTerms, currentTab }) => {
  if (!items?.length) return null;

  const initialState = items.map((item, i) => ({ ...item, id: i }));

  const [itemsList, setItemsList] = useState(initialState);

  const setActiveTab = (id) => {
    const updatedList = itemsList.map((item) => (item.id === id
      ? { ...item, isActive: true }
      : { ...item, isActive: false }));

    setItemsList(updatedList);
  };

  const handleClick = (id, title) => {
    setActiveTab(id);
    const filter = title === 'All' ? '' : title;
    setMoviesByTerms({ filter });
  };

  useEffect(() => {
    const id = itemsList.find((el) => el.title.toLowerCase() === currentTab.toLowerCase())?.id;

    if (id) setActiveTab(id);
  }, [currentTab]);

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
      isActive: PropTypes.bool,
    }),
  ),
};

const mapStateToProps = ({ movies }) => ({ currentTab: movies.params.filter });

export default connect(mapStateToProps, { setMoviesByTerms })(TabbedFilter);
