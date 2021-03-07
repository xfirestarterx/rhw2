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
  options: [
    {
      text: 'Option 1',
      value: 'value 1'
    },
    {
      text: 'Option 2',
      value: 'value 2'
    },
    {
      text: 'Option 3',
      value: 'value 3'
    }
  ]
};

const MainContentTop = () => {
  return (
    <div className={styles.FiltersSection}>
      <Row>
        <Column>
          <TabbedFilter items={filterItems} />
        </Column>

        <Column>
          <LabeledDropdown labelText={dropDownOptions.labelText} optionsList={dropDownOptions.options} />
        </Column>
      </Row>
    </div>
  );
};

export default MainContentTop;
