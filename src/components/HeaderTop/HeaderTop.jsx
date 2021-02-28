import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import Column from '../Column/Column';
import Row from '../Row/Row';
import HeaderContent from '../HeaderContent/HeaderContent';

const HeaderTop = ({ }) => {
  return (
    <Row>
      <Column>
        <Logo />
      </Column>

      <Column>
        <HeaderContent />
      </Column>
    </Row>
  );
};

export default HeaderTop;
