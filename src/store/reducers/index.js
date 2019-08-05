import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import main from './main';

const rootReducer = combineReducers({
  form,
  main,
});

export default rootReducer;
