import * as EnvConstant from '../constants/Env';
import * as Api from '../api';

export const load = () => (
    dispatch => (
        Api.get('/env').then(
            response => {
                dispatch(set(response.data));
                return response;
            }
        )
    )
);

export const setMiniCart = (payload) => ({type: EnvConstant.SET_MINI_CART, payload});

const set = (data) => ({type: EnvConstant.SET, payload: data});

