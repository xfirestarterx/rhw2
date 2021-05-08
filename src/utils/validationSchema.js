import * as Yup from 'yup';

export default Yup.object({
  title: Yup.string()
    .required('Required'),

  poster_path: Yup.string()
    .url('Must be a valid url')
    .required('Required'),

  runtime: Yup.number()
    .positive('Must be positive')
    .required('Required'),

  genres: Yup.array()
    .of(Yup.string())
    .min(1, 'Minimum ${min} to be selected')
    .required('Required'),

  release_date: Yup.date()
    .required('Required'),
});
