export default (data) => {
  return {
    ...data,
    genres: data.genres,
    overview: 'Lorem',
    runtime: Number(data.runtime),
  }
}