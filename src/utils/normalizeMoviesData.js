const normalizeMoviesData = (data) => {
  return data.map(({release_date, genres, id, poster_path, title, vote_average}) => ({
    subtitle: genres.join(', '),
    label: release_date.substr(0, 4),
    img: poster_path,
    rating: String(vote_average),
    title,
    id
  }));
};

export default normalizeMoviesData;
