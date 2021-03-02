import React from 'react';
import styles from './CardFooter.styl';
import PropTypes from 'prop-types';
import CardTitle from '../CardTitle/CardTitle';
import CardLabel from '../CardLabel/CardLabel';
import CardSubtitle from '../CardSubtitle/CardSubtitle';

const CardFooter = ({ title, subtitle, label }) => {
  return (
    <div className={styles.CardFooter}>
      <CardTitle text={title} />
      <CardSubtitle text={subtitle} />
      <CardLabel text={label} />
    </div>
  );
};

CardFooter.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  label: PropTypes.string
};

export default CardFooter;
