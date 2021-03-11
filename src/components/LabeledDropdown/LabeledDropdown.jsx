import React, { useState } from 'react';
import styles from './LabeledDropdown.styl';
import PropTypes from 'prop-types';

export const containerWidth = {
  auto: 'auto',
  full: '100%'
}

export const dropdownTheme = {
  light: 'Light',
  dark: 'Dark'
}

const LabeledDropdown = ({ labelText, optionsList, width = containerWidth.auto, theme = dropdownTheme.light }) => {
  const [isShown, updateIsShown] = useState(false);
  const toggleVisibility = () => updateIsShown(!isShown);

  return (
    <div className={styles.LabeledDropdown}>
      {labelText && <label className={styles.Label}>{labelText}</label>}

      <div className={styles.Container} style={{width: width}}>
        <div
          key={0}
          data-value={optionsList[0]?.value}
          className={`${styles.SelectedOption} ${styles[theme]}`}
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
  ),
  width: PropTypes.string,
  theme: PropTypes.string
};

export default LabeledDropdown;
