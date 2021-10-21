import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { doctorReducer } from './Doctors';

const reducer = combineReducers({
    doctorReducer, clientReducer, appointmentReducer
});

const store = createStore(
    reducer,
    applyMiddleware(logger, thunk),
);

export default store;