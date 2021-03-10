import React, { useCallback, useContext } from 'react';
import styles from './CardFooter.styl';
import PropTypes from 'prop-types';
import CardTitle from '../CardTitle/CardTitle';
import CardLabel from '../CardLabel/CardLabel';
import CardSubtitle from '../CardSubtitle/CardSubtitle';
import Row from '../Row/Row';
import Button, { buttonThemes } from '../Button/Button';
import MainContext from '../MainContext/MainContext';
import { modalType } from '../Modal/Modal';

const CardFooter = ({ title, subtitle, label, id }) => {
  const { openModal, setSelectedMovie } = useContext(MainContext);
  const deleteHandler = useCallback(() => {
    openModal(modalType.delete);
    setSelectedMovie(id);
  });

  return (
    <div className={styles.CardFooter}>
      <CardTitle text={title} />
      <CardSubtitle text={subtitle} />
      <CardLabel text={label} />

      <Row className={styles.Actions}>
        <Button onClick={deleteHandler} text='Delete' theme={buttonThemes.dismiss} />
        <Button
          onClick={() => openModal(modalType.edit)}
          text='Edit'
          theme={buttonThemes.confirm}
          propStyles={{marginLeft: '20px'}} />
      </Row>
    </div>
  );
};

CardFooter.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  label: PropTypes.string,
  deleteHandler: PropTypes.func,
  editHandler: PropTypes.func,
  id: PropTypes.number.isRequired
};

export default CardFooter;
