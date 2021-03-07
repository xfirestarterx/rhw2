import React, { useState } from 'react';
import styles from './LabeledDropdown.styl';
import PropTypes from 'prop-types';

const LabeledDropdown = ({ labelText, optionsList }) => {
  const [isShown, updateIsShown] = useState(false);
  const toggleVisibility = () => updateIsShown(!isShown);

  return (
    <div className={styles.LabeledDropdown}>
      {labelText && <label className={styles.Label}>{labelText}</label>}

      <div className={styles.Container}>
        <div
          key={0}
          data-value={optionsList[0]?.value}
          className={styles.SelectedOption}
          onClick={toggleVisibility}>
          {optionsList[0]?.text}
        </div>

        {isShown &&
          <div className={styles.OptionsList}>
            {optionsList.map((option, i) => {
              if (i === 0) {
                return null;
              }

              return (
                <div
                  key={i}
                  data-value={option.value}
                  className={styles.Option}
                  onClick={toggleVisibility}>
                  {option.text}
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};

LabeledDropdown.propTypes = {
  labelText: PropTypes.string,
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.any
    }).isRequired
  )
};

export default LabeledDropdown;
