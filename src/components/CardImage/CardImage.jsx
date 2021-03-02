import React from 'react';
import PropTypes from 'prop-types';

const CardImage = ({ img }) => <img src={img} />;

CardImage.propTypes = {
  img: PropTypes.string.isRequired
};

export default CardImage;
