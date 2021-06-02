import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Modal.styl';
import { closeModal } from '../../store/actions';

export const modalType = {
  add: 'add',
  delete: 'delete',
  edit: 'edit',
  none: 'none',
};

const Modal = ({ title, children, closeModal }) => (
  <div data-testid="modal" className={styles.ModalWrap}>
    <div onClick={closeModal} className={styles.Overlay} />
    <div className={styles.ModalContent}>
      <div onClick={closeModal} className={styles.ModalClose} />
      { title && <p className={styles.ModalTitle}>{title}</p> }
      { children }
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default connect(null, { closeModal })(Modal);
