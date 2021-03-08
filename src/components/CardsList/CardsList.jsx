import React, { useContext } from 'react';
import styles from './CardsList.styl';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardsList = ({ items }) => {
  return (
    <div className={styles.CardsList}>
      {items.map(item => <Card key={item.id} {...item} /> )}
    </div>
  );
};

CardsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      label: PropTypes.string,
      subtitle: PropTypes.string,
      img: PropTypes.string.isRequired
    })
  )
};

export default CardsList;
