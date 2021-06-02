import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardsList.styl';
import Card from '../Card/Card';

const CardsList = ({ items, defaultMessage = 'Nothing to show' }) => (items.length ? (
  <div className={styles.CardsList}>
    {items.map((item) => <Card key={item.id} {...item} />)}
  </div>
) : <div className={styles.Placeholder}>{defaultMessage}</div>);

CardsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      label: PropTypes.string,
      subtitle: PropTypes.string,
      img: PropTypes.string.isRequired,
    }),
  ),
  defaultMessage: PropTypes.string,
};

export default CardsList;
