import 'isomorphic-fetch';

const base = 'http://localhost:4000';

const call = (path, options = {}) => {
  const mergedOptions = {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  };

  return new Promise(async (resolve) => {
    await fetch(`${base}${path}`, mergedOptions)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        console.log(e);
        resolve();
      });
  });
};

export const getByTerms = async (terms) => {
  const params = new URLSearchParams(terms);
  return await call(`/movies?${params}`).then(({ data }) => data);
};

export const getAll = async () => await call('/movies').then(({ data }) => data);

export const add = async (movie) => await call('/movies', {
  method: 'POST',
  body: JSON.stringify(movie),
});

export const update = async (movie) => await call('/movies', {
  method: 'PUT',
  body: JSON.stringify(movie),
});

export const get = async (id) => await call(`/movies/${id}`);

export const remove = async (id) => await call(`/movies/${id}`, { method: 'DELETE' });
