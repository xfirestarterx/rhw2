const normalizeMoviesData = (data) => {
  return data.map(({release_date, genres, id, poster_path, title}) => ({
    subtitle: genres.join(', '),
    label: release_date.substr(0, 4),
    img: poster_path,
    title,
    id
  }));
};

export default normalizeMoviesData;
