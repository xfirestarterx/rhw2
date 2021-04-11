import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setMoviesByTerms } from 'store/actions';
import PropTypes from 'prop-types';
import styles from './TabbedFilter.styl';
import TabItem from '../TabItem/TabItem';

const TabbedFilter = ({ items = [], setMoviesByTerms, requestParamsState }) => {
  if (!items?.length) return null;

  const initialState = items.map((item, i) => ({...item, id: i}));

  const [itemsList, setItemsList] = useState(initialState);

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
    const filter = title === 'All' ? '' : title;
    setMoviesByTerms({ filter }, requestParamsState);
  }

  return (
    <div className={styles.TabbedFilter}>
      {itemsList.map(({ title, isActive }, i) => <TabItem onClick={handleClick} key={i} title={title} isActive={isActive} id={i} />)}
    </div>
  );
};

const mapStateToProps = ({ movies }) => ({ requestParamsState: movies.params });

TabbedFilter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isActive: PropTypes.bool
    })
  )
};

export default connect(mapStateToProps, { setMoviesByTerms })(TabbedFilter);
