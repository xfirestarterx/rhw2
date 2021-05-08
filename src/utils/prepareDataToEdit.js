import genres from '../data/genres';

export default ({id, img, release_date, subtitle, title, runtime}) => {
  return {
    id,
    title,
    poster_path: img,
    release_date,
    genres: subtitle
              .split(', ')
              .map(label => (genres.find((genreObj) => genreObj.label === label))?.label),
    runtime
  };
}
