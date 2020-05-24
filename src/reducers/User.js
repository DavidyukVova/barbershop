import * as UserConstants from '../constants/User'
import * as AppConstants from '../constants/App'
import * as api from '../api';

const initialState = {
    logged: api.getLogged(),
    requestState: '',
    id: null,
    name: '',
    roles: UserConstants.ROLE_GUEST
}


export default function (state = initialState, action) {
    switch (action.type) {
        case UserConstants.SET_ACTION:
            return {...state, ...action.payload};

        case AppConstants.START_LOAD_ACTION:
            return {...state, requestState: AppConstants.START_LOAD_ACTION};
        case AppConstants.FAIL_LOAD_ACTION:
            return {...state, requestState: AppConstants.FAIL_LOAD_ACTION, requestError: action.payload};
        case AppConstants.SUCCESS_LOAD_ACTION:
            return {...state, requestState: ''};

        default:
            return state;
    }
}