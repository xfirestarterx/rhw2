import React from 'react';
import styles from './HeaderTop.styl';
import Logo from '../Logo/Logo';
import Column from '../Column/Column';
import Row from '../Row/Row';
import HeaderContent from '../HeaderContent/HeaderContent';

const HeaderTop = ({ }) => (
  <div className={styles.HeaderTop}>
    <Row>
      <Column>
        <Logo />
      </Column>

      <Column isRightAligned>
        <HeaderContent />
      </Column>
    </Row>
  </div>
);

export default HeaderTop;
