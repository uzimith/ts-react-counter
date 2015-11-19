import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores/configureStore';

interface WindowWithState extends Window { __INITIAL_STATE__: any };

const initialState  = (window as WindowWithState).__INITIAL_STATE__;
const store = configureStore(initialState);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
        );
