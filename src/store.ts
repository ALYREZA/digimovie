import {combineReducers} from 'redux';
import global from './containers/App/reducer';
import category from './containers/CategoryScreen/reducer';
import user from './containers/LoginScreen/reducer';
const combination = combineReducers({
  global,
  user,
  category,
});
export default combination;
