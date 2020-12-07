import {combineReducers} from 'redux';
import global from './containers/App/reducer';
import user from './containers/LoginScreen/reducer';
const combination = combineReducers({
  global,
  user,
});
export default combination;
