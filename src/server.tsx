import express from 'express';
import * as qs from 'qs';
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore'
import App from './containers/App';

import * as ReactDOM from 'react-dom/server';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(handleRender);

function handleRender(req, res) {
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter) || 0;
    let initialState = {
      counter: counter
    }
    const store = configureStore(initialState);

    const html = ReactDOM.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    res.send(renderFullPage(html, store.getState()));
};

function renderFullPage(html, initialState) {
    return `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Redux Counter</title>
          </head>
          <body>
            <div id="root">${html}</div>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="client.js"></script>
          </body>
        </html>
    `;
};

app.listen(port, () => {
  console.log('start: server');
});

