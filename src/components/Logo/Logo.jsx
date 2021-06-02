import React from 'react';
import styles from './Logo.styl';
import logo from '../../img/logo';

const Logo = () => (
  <div className={styles.LogoWrap}>
    <img src={logo} />
  </div>
);

export default Logo;
