import React from 'react';
import styles from './Header.styl';
import HeaderPrimaryContent from '../HeaderPrimaryContent/HeaderPrimaryContent';
import PageTitle from '../PageTitle/PageTitle';
import HeaderTop from '../HeaderTop/HeaderTop';
import FormRow from '../FormRow/FormRow';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div className={styles.Header}>
      <HeaderTop />

      <HeaderPrimaryContent>
        <PageTitle text="Find your movie" />
        <FormRow>
          <TextField />
          <Button text="search" style="Accent"/>
        </FormRow>
      </HeaderPrimaryContent>
    </div>
  )
};

export default Header;
