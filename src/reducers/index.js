import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';

// Combine reducers (if you have more than one reducer)
const rootReducer = combineReducers({
  employee: employeeReducer
});

export default rootReducer;
