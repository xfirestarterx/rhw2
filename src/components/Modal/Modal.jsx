import React, { useContext } from 'react';
import styles from './Modal.styl';
import PropTypes from 'prop-types';
import MainContext from '../MainContext/MainContext';

export const modalType = {
  add: 'add',
  delete: 'delete',
  edit: 'edit',
  none: 'none'
}

const Modal = ({ title, children }) => {
  const { closeModal } = useContext(MainContext);

  return (
    <div className={styles.ModalWrap}>
      <div onClick={closeModal} className={styles.Overlay} />
      <div className={styles.ModalContent}>
        <div onClick={closeModal} className={styles.ModalClose} />
        { title && <p className={styles.ModalTitle}>{title}</p> }
        { children }
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default Modal;

