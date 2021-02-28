import React from 'react';
import PropTypes from 'prop-types';
import Center from '../Center/Center';
import FooterLogo from '../FooterLogo/FooterLogo';

const Footer = () => {
  return (
    <div className="Footer">
      <Center>
        <FooterLogo />
      </Center>
    </div>
  );
};

Footer.propTypes = {
};

export default Footer;
