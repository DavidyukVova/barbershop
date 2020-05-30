import * as GalleryConstants from '../constants/Gallery';
import * as Api from '../api';

export const load = () => (
    dispatch => (
        Api.get('/gallery').then(
            response => {
                dispatch(set(response.data));
                return response;
            }
        )
    )
);


const set = (data) => ({type: GalleryConstants.SET, payload: data});