import { combineReducers } from 'redux';
import intermittence from './intermittence/reducer';
import image from './image/reducer';

const reducers = combineReducers({
  image,
  intermittence
});

export default reducers;
