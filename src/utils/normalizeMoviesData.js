const normalizeMoviesData = (data) => {
  return data.map(({year, genre, id, img, title}) => ({
    subtitle: genre,
    label: year,
    title,
    img,
    id
  }));
};

export default normalizeMoviesData;
