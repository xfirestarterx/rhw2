import React from 'react';
import styles from './MainContent.styl';
import TabbedFilter from '../TabbedFilter/TabbedFilter';
import LabeledDropdown from '../LabeledDropdown/LabeledDropdown';
import Row from '../Row/Row';
import Column from '../Column/Column';
import CardsList from '../CardsList/CardsList';
import moviesData from '../../data/data';
import FoundMoviesMessage from '../FoundMoviesMessage/FoundMoviesMessage';
import normalizeMoviesData from '../../utils/normalizeMoviesData';

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

const normalizedMoviesData = normalizeMoviesData(moviesData);

const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <div className={styles.FiltersSection}>
        <Row>
          <Column>
            <TabbedFilter items={filterItems} />
          </Column>

          <Column>
            <LabeledDropdown {...dropDownOptions}/>
          </Column>
        </Row>
      </div>

      <FoundMoviesMessage count={39} text='movies found' />
      <CardsList items={normalizedMoviesData} />
    </div>
  );
};

export default MainContent;
