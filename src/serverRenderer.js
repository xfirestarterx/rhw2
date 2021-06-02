import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import Root from './Root';
import configureStore from './store/store';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import { setMovieDetailsThunk, setMoviesByTerms } from './store/actions';

const routes = [
  {
    path: '/',
    component: HomePage,
    fetchInitialData: (dispatch, query) => {
      try {
        const params = Object.fromEntries(new URLSearchParams(query));
        return dispatch(setMoviesByTerms(params));
      } catch (e) { }
    },
  },
  {
    path: '/movie/:id',
    component: MoviePage,
    fetchInitialData: (dispatch, id) => {
      try {
        return dispatch(setMovieDetailsThunk(id));
      } catch (e) { }
    },
  },
];

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="/css/main.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  const store = configureStore();

  return (req, res) => {
    // This context object contains the results of the render
    const context = {};

    const root = (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
    const { url } = req;
    const n = url.lastIndexOf('/');
    const params = url.substring(n + 1);
    const promise = activeRoute.fetchInitialData
      ? activeRoute.fetchInitialData(store.dispatch, params)
      : Promise.resolve();

    promise.then(() => {
      const htmlString = renderToString(root);

      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      const preloadedState = store.getState();
      res.send(renderHTML(htmlString, preloadedState));
    }).catch(() => { });
  };
}
