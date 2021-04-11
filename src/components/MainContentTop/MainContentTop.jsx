import React from 'react';
import { connect } from 'react-redux';
import { setMoviesByTerms } from 'store/actions';
import styles from './MainContentTop.styl';
import TabbedFilter from '../TabbedFilter/TabbedFilter';
import LabeledDropdown from '../LabeledDropdown/LabeledDropdown';
import Row from '../Row/Row';
import Column from '../Column/Column';
import sortOrder from 'enums/sortOrder';
import filterTerms from 'enums/filterTerms';

const filterItems = [
  { title: filterTerms.all, isActive: true },
  { title: filterTerms.action },
  { title: filterTerms.thriller },
  { title: filterTerms.adventure },
  { title: filterTerms.romance },
  { title: filterTerms.war },
  { title: filterTerms.comedy },
];

const dropDownOptions = {
  labelText: 'sort by',
  options: [
    {
      label: 'year',
      value: sortOrder.year
    },
    {
      label: 'title',
      value: sortOrder.title
    },
  ]
};

const MainContentTop = ({ requestParamsState, setMoviesByTerms }) => {
  const handleDropdownChange = ({ value }) => {
    setMoviesByTerms({ sortBy: value }, requestParamsState);
  }

  return (
    <div className={styles.FiltersSection}>
      <Row>
        <Column>
          <TabbedFilter items={filterItems} />
        </Column>

        <Column isRightAligned={true}>
          <LabeledDropdown labelText={dropDownOptions.labelText} optionsList={dropDownOptions.options} width={140} onChange={handleDropdownChange} />
        </Column>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ movies }) => ({ requestParamsState: movies.params });

export default connect(mapStateToProps, { setMoviesByTerms })(MainContentTop);
