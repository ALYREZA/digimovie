import {combineReducers} from 'redux';
import global from './containers/App/reducer';
import category from './containers/CategoryScreen/reducer';
import user from './containers/LoginScreen/reducer';
import movie from './containers/MovieScreen/reducer';

const combination = combineReducers({
  global,
  user,
  category,
  movie,
});
export default combination;
