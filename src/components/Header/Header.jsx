import React from 'react';
import styles from './Header.styl';
import Logo from '../Logo/Logo';
import Column from '../Column/Column';
import HeaderContent from '../HeaderContent/HeaderContent';

const Header = () => {
  return(
    <div className={styles.Header}>
      <Column>
        <Logo />
      </Column>

      <Column alignRight>
        <HeaderContent />
      </Column>
    </div>
  )
};

export default Header;
