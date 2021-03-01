import React from 'react';
import styles from './Header.styl';
import HeaderPrimaryContent from '../HeaderPrimaryContent/HeaderPrimaryContent';
import PageTitle from '../PageTitle/PageTitle';
import HeaderTop from '../HeaderTop/HeaderTop';
import FormRow from '../FormRow/FormRow';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import img from '../../img/header-bg';

const Header = () => {
  return (
    <div className={styles.Header}>
      <img src={img} className={styles.BgImg} />
      <HeaderTop />

      <HeaderPrimaryContent>
        <PageTitle text="Find your movie" />
        <FormRow maxWidth="840">
          <TextField placeholder='What do you want to watch?' />
          <Button
            text="search"
            theme="Accent"
            propStyles={{ marginLeft: '20px' }} />
        </FormRow>
      </HeaderPrimaryContent>
    </div>
  )
};

export default Header;
