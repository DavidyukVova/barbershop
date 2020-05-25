import * as BarbersConstant from '../constants/Barbers';
import * as Api from '../api';

export const load = () => (
    dispatch => (
        Api.get('/').then(
            response => {
                dispatch(set(response.data));
                return response;
            }
        )
    )
);


const set = (data) => ({type: BarbersConstant.SET, payload: data});