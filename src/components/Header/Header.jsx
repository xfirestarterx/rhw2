import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.styl';
import HeaderPrimaryContent from '../HeaderPrimaryContent/HeaderPrimaryContent';
import PageTitle from '../PageTitle/PageTitle';
import HeaderTop from '../HeaderTop/HeaderTop';
import FormRow from '../FormRow/FormRow';
import TextField from '../TextField/TextField';
import Button, { buttonThemes } from '../Button/Button';
import { setMoviesByTerms } from 'store/actions';
import img from '../../img/header-bg';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMsg from 'components/ErrorMsg/ErrorMsg';

const Header = ({ setMoviesByTerms, requestParamsState }) => {
  const formik = useFormik({
    initialValues: { inputSearch: '' },
    validationSchema: Yup.object({
      inputSearch: Yup.string().required('Required'),
    }),
    onSubmit: ({inputSearch}) => {
      setMoviesByTerms({search: inputSearch}, requestParamsState);
    }
  });

  return (
    <div className={styles.Header}>
      <img src={img} className={styles.BgImg} />
      <HeaderTop />

      <HeaderPrimaryContent>
        <PageTitle text="Find your movie" />
          <Formik>
            <Form onSubmit={formik.handleSubmit}>
            <FormRow maxWidth="840">
              <TextField fieldProps={formik.getFieldProps('inputSearch')} id="inputSearch" placeholder='What do you want to watch?' />
              <Button
                type='submit'
                text="search"
                theme={buttonThemes.confirm}
                propStyles={{ marginLeft: '20px' }} />
            </FormRow>
            <ErrorMsg msg={formik.errors.inputSearch} />
            </Form>
          </Formik>
      </HeaderPrimaryContent>
    </div>
  )
};

const mapStateToProps = ({movies}) => ({ requestParamsState: movies.params });

export default connect(mapStateToProps, { setMoviesByTerms })(Header);
