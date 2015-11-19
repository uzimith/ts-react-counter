import express from 'express';
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore'
import App from './containers/App';

import * as ReactDOM from 'react-dom/server';

const app = express();
const port = 3000;

app.use(handleRender);

function handleRender(req, res) {
    const store = configureStore({});

    const html = ReactDOM.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const initialState = store.getState();

    res.send(renderFullPage(html, initialState));
};
function renderFullPage(html, initialState) {
    return `
        <!doctype html>
        <html>
          <head>
            <title>Redux Counter</title>
          </head>
          <body>
            <div id="app">${html}</div>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="app.js"></script>
          </body>
        </html>
    `;
};

app.listen(port, () => {
  console.log('start: server');
});

