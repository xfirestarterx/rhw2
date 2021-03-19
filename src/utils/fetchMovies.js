import moviesData from '../data/data';
import * as moviesSvc from 'utils/moviesSvc';

const fetchMovies = async () => {
  const newMovie = await fetch('http://localhost:4000/movies', {
    method: 'POST', heders: { 'Content-Type': 'application/json' }, body: JSON.stringify({
      "title": "sdf",
      "runtime": 34,
      "overview": "sdfgd",
      "poster_path": "http://localhost"
    })
  })
    .then(res => res.json())
    .then(json => resolve(json));

  console.log(newMovie)

  return new Promise(resolve => {
    setTimeout(() => resolve(moviesData), 2000);
  });
}

export default fetchMovies;
