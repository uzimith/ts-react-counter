import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState);
    return store;
}

export default configureStore;
