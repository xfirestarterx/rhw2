import React from 'react';
import styles from './NotFoundPage.styl';
import { Link } from 'react-router-dom';
import Button, { buttonThemes } from 'components/Button/Button';

import Footer from 'components/Footer/Footer'

const header = <Footer />;
const NotFoundPage = () => (
  <div className={styles.NotFoundContainer}>
    { header }
    <div className={styles.NotFoundContent}>
      <h1>Page not found</h1>
      <Link to='/'>
        <Button text='Go back to home' theme={buttonThemes.dismiss} />
      </Link>
    </div>
    <Footer />
  </div>
);

export default NotFoundPage;
