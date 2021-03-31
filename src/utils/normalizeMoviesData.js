const normalizeMoviesData = (data) => {
  return data.map(({release_date, genres, id, poster_path, title, vote_average, runtime}) => ({
    subtitle: genres.join(', '),
    label: release_date.substr(0, 4),
    img: poster_path,
    rating: String(vote_average),
    release_date,
    title,
    runtime,
    id,
  }));
};

export default normalizeMoviesData;
