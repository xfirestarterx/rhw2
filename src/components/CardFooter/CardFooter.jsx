import React from 'react';
import PropTypes from 'prop-types';
import CardTitle from '../CardTitle/CardTitle';
import CardLabel from '../CardLabel/CardLabel';
import CardSubtitle from '../CardSubtitle/CardSubtitle';

const CardFooter = () => {
  return (
    <div className="CardFooter">
      <CardTitle />
      <CardLabel />
      <CardSubtitle />
    </div>
  );
};

CardFooter.propTypes = {
};

export default CardFooter;
