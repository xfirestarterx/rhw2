import moviesData from '../data/data';

const fetchMovies = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(moviesData), 2000);
  });
}

export default fetchMovies;
