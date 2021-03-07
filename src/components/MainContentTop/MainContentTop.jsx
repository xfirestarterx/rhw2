import React from 'react';
import styles from './MainContentTop.styl';
import TabbedFilter from '../TabbedFilter/TabbedFilter';
import LabeledDropdown from '../LabeledDropdown/LabeledDropdown';
import Row from '../Row/Row';
import Column from '../Column/Column';

const filterItems = [
  { id: 1, title: 'all', isActive: true },
  { id: 2, title: 'documentary' },
  { id: 3, title: 'comedy' },
  { id: 4, title: 'horror' },
  { id: 5, title: 'crime' }
];

const dropDownOptions = {
  labelText: 'sort by',
  optionText: 'release date'
};

const MainContentTop = () => {
  return (
    <div className={styles.FiltersSection}>
      <Row>
        <Column>
          <TabbedFilter items={filterItems} />
        </Column>

        <Column>
          <LabeledDropdown {...dropDownOptions} />
        </Column>
      </Row>
    </div>
  );
};

export default MainContentTop;
