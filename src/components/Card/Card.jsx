import React from 'react';
import PropTypes from 'prop-types';
import CardImage from '../CardImage/CardImage';
import CardFooter from '../CardFooter/CardFooter';

const Card = () => {
  return (
    <div className="Card">
      <CardImage />
      <CardFooter />
    </div>
  );
};

Card.propTypes = {
};

export default Card;
