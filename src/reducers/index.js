import { combineReducers } from 'redux';
import Env from './Env';
import Barbers from  './Barbers';
import Gallery from './Gallery';

export default combineReducers({
    env: Env,
    barbers: Barbers,
    gallery: Gallery,
})