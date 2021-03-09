import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const MovieHeader = () => {
  const params = useParams();
  const id = Number(params?.id);

  return <p>movie header {id}</p>
};

MovieHeader.propTypes = {}

export default MovieHeader;
