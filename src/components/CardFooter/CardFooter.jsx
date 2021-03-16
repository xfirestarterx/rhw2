import React from 'react';
import styles from './CardFooter.styl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openModal } from 'store/actions';
import CardTitle from '../CardTitle/CardTitle';
import CardLabel from '../CardLabel/CardLabel';
import CardSubtitle from '../CardSubtitle/CardSubtitle';
import Row from '../Row/Row';
import Button, { buttonThemes } from '../Button/Button';
import { modalType } from '../Modal/Modal';
import { Link } from 'react-router-dom';

const CardFooter = ({ title, subtitle, label, id, openModal }) => {
  return (
    <div className={styles.CardFooter}>
      <Link className={styles.Link} to={`/movie/${id}`}>
        <CardTitle text={title} />
        <CardSubtitle text={subtitle} />
      </Link>
      <CardLabel text={label} />

      <Row className={styles.Actions}>
        <Button onClick={() => openModal(modalType.delete)} text='Delete' theme={buttonThemes.dismiss} />
        <Button
          onClick={() => openModal(modalType.edit)}
          text='Edit'
          theme={buttonThemes.confirm}
          propStyles={{ marginLeft: '20px' }} />
      </Row>
    </div>
  );
};

CardFooter.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  label: PropTypes.string,
  deleteHandler: PropTypes.func,
  editHandler: PropTypes.func
};

export default connect(null, { openModal })(CardFooter);
