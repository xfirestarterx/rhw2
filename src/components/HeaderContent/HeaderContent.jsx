import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../store/actions';
import Button from '../Button/Button';
import { modalType } from '../Modal/Modal';

const HeaderContent = ({ openModal }) => {
  return <Button onClick={() => openModal(modalType.add)} text='+ Add movie' />;
};

export default connect(null, { openModal })(HeaderContent);
