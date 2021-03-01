import React from 'react';
import styles from './MainContent.styl';
import TabbedFilter from '../TabbedFilter/TabbedFilter';
import LabeledDropdown from '../LabeledDropdown/LabeledDropdown';
import Row from '../Row/Row';
import Column from '../Column/Column';
import TextMessage from '../TextMessage/TextMessage';
import CardsList from '../CardsList/CardsList';

const filterItems = [
  { id: 1, title: 'all', isActive: true },
  { id: 2, title: 'documentary' },
  { id: 3, title: 'comedy' },
  { id: 4, title: 'horror' },
  { id: 5, title: 'crime' }
];

const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <div className={styles.FiltersSection}>
        <Row>
          <Column>
            <TabbedFilter items={filterItems} />
          </Column>

          <Column>
            <LabeledDropdown />
          </Column>
        </Row>
      </div>

      <TextMessage />
      <CardsList />
    </div>
  );
};

export default MainContent;
