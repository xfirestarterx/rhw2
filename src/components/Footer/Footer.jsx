import React from 'react';
import styles from './Footer.styl';
import Center from '../Center/Center';
import FooterLogo from '../FooterLogo/FooterLogo';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Center>
        <FooterLogo />
      </Center>
    </div>
  );
};

export default Footer;
