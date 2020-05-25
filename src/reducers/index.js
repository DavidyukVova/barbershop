import { combineReducers } from 'redux';
import Env from './Env';
import Barbers from  './Barbers';

export default combineReducers({
    env: Env,
    barbers: Barbers,
})