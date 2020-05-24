import * as UserConstants from '../constants/User';
import * as AppConstants from '../constants/App';
import * as Api from '../api';
import * as EnvActions from "./Env";


export const login = (username, password, rememberMe = true) => (
    dispatch => {
        dispatch(startRequest());
        return Api.post('/user/login', {username, password})
            .then(response => {
                const {token} = response.data;
                Api.saveToken(token, rememberMe);
                dispatch(getData());
                dispatch(EnvActions.load());

            }).catch(e => {
                dispatch(failRequest(e));
                set(UserConstants.NO_USER);
                throw e;
            })
    }
);

export const getData = () => (
    dispatch => (
        Api.get('/user/view').then(response => {
            dispatch(successRequest());
            dispatch(set(response.data));
        }).catch(e => {
            dispatch(failRequest(e));
            set(UserConstants.NO_USER);
        })
    )
);


const startRequest = () => ({type: AppConstants.START_LOAD_ACTION, payload: {}});
const successRequest = () => ({type: AppConstants.SUCCESS_LOAD_ACTION, payload: {}});
const failRequest = (e) => ({type: AppConstants.FAIL_LOAD_ACTION, payload: {message: e.message}});

const set = (data) => ({type: UserConstants.SET_ACTION, payload: data});