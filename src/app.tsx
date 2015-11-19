import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import { Store, bindActionCreators } from 'redux';

import Counter from './components/Counter';

import * as CounterActions from './actions/counter';
import configureStore from './stores/configureStore';

const store: Store = configureStore({});

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

const root = document.querySelector("#root");

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , root);
