import { createStore } from 'redux';
import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  employee: employeeReducer,
});

export const store = createStore(rootReducer);
