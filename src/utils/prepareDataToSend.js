export default (data) => ({
  ...data,
  genres: data.genres,
  overview: 'Lorem',
  runtime: Number(data.runtime),
});
