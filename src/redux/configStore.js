import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { doctorReducer } from './Doctors';
import { appointmentReducer } from './Appointments';

const reducer = combineReducers({
    doctorReducer, appointmentReducer, clientReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(logger, thunk),
);

export default store;

