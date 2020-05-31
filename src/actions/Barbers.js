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

export const setOneBarber = (barber, indexOf = undefined) => {

    let {data} = store.getState().barbers;

    if(indexOf === undefined){
        indexOf = data.barbers.findIndex(e => (parseInt(e.id) === parseInt(barber.id)));
    }

    if (indexOf > -1) {
        data.barbers[indexOf] = item;
    } else {
        data.barbers.push(item);
    }

    return setData({...data});

};

const setData = (payload) => ({type: BarbersConstants.SET_DATA, payload});


const set = (data) => ({type: BarbersConstant.SET, payload: data});