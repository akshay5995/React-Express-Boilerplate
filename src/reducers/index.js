import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { welcomeReducer } from './welcomeReducer';

module.exports = combineReducers({
  routing: routerReducer,
  welcomeReducer,
});
