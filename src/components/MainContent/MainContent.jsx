import React from 'react';
import PropTypes from 'prop-types';
import TabbedFilter from '../TabbedFilter/TabbedFilter';
import LabeledDropdown from '../LabeledDropdown/LabeledDropdown';
import Row from '../Row/Row';
import Column from '../Column/Column';
import TextMessage from '../TextMessage/TextMessage';
import CardsList from '../CardsList/CardsList';
import Separator from '../Separator/Separator';

const filterItems = [
  { id: 1, title: 'all' },
  { id: 2, title: 'documentary' },
  { id: 3, title: 'comedy' },
  { id: 4, title: 'horror' },
  { id: 5, title: 'crime' }
];

const MainContent = () => {
  return (
    <div className="MainContent">
      <Row>
        <Column>
          <TabbedFilter items={filterItems} />
        </Column>

        <Column>
          <LabeledDropdown />
        </Column>

        <Separator />
      </Row>

      <TextMessage />
      <CardsList />
    </div>
  );
};

MainContent.propTypes = {
};

export default MainContent;
