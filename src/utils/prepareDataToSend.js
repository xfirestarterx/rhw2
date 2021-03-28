export default (data) => {
  return {
    ...data,
    genres: data.genres.map(({value}) => value),
    overview: 'Lorem',
    runtime: Number(data.runtime),
  }
}