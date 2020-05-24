import {createStore, applyMiddleware} from 'redux'
import combineReducers from './reducers';
import thunkMiddleware from 'redux-thunk'

const store = createStore(
    combineReducers,
    applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
    )
);

export default store;
