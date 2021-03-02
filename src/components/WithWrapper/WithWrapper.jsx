import React from 'react';
import styles from './WithWrapper.styl';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => <div className={styles.Wrapper}>{children}</div>;

const WithWrapper = (Component) => {
  return function WithWrapperComponent(props) {
    return (
      <Wrapper>
        <Component {...props} />
      </Wrapper>
    );
  }
};

WithWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default WithWrapper;
