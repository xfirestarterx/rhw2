import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import LabeledDropdown from '../LabeledDropdown/LabeledDropdown';
import Row from '../Row/Row';
import Column from '../Column/Column';
import TextMessage from '../TextMessage/TextMessage';
import CardsList from '../CardsList/CardsList';

const MainContent = () => {
  return (
    <div className="MainContent">
      <Row>
        <Column>
          <Breadcrumbs />
        </Column>

        <Column>
          <LabeledDropdown />
        </Column>
      </Row>

      <TextMessage />
      <CardsList />
    </div>
  );
};

MainContent.propTypes = {
};

export default MainContent;
