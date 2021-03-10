import React, { useContext } from 'react';
import Button from '../Button/Button';
import MainContext from '../MainContext/MainContext';
import { modalType } from '../Modal/Modal';

const HeaderContent = () => {
  const { openModal } = useContext(MainContext);

  return <Button onClick={() => openModal(modalType.add)} text='+ Add movie' />;
};

export default HeaderContent;
