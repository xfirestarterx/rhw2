import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabItem.styl';

const TabItem = ({ id, title, isActive = false, onClick = null }) => {
  return (
    <div
      className={`${styles.TabItem} ${isActive ? styles.TabItemActive : ''}`}
      onClick={() => { typeof onClick === 'function' ? onClick(id, title) : void 0} }
    >
      {title}
    </div>
  );
}

TabItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

export default TabItem;
