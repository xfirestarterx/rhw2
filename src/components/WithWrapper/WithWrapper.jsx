import React from 'react';
import PropTypes from 'prop-types';
import styles from './WithWrapper.styl';

// PATTERN: {Higher order component}
const Wrapper = ({ children }) => <div className={styles.Wrapper}>{children}</div>;

const WithWrapper = (Component) => function WithWrapperComponent(props) {
  return (
    <Wrapper>
      <Component {...props} />
    </Wrapper>
  );
};

WithWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default WithWrapper;
