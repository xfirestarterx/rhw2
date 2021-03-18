import React from 'react';
import styles from './HeaderTop.styl';
import Logo from '../Logo/Logo';
import Column from '../Column/Column';
import Row from '../Row/Row';
import HeaderContent from '../HeaderContent/HeaderContent';

const HeaderTop = ({ }) => {
  return (
    <div className={styles.HeaderTop}>
      <Row>
        <Column>
          <Logo />
        </Column>

        <Column isRightAligned={true}>
          <HeaderContent />
        </Column>
      </Row>
    </div>
  );
};

export default HeaderTop;
