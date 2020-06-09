import * as EnvConstants from '../constants/Env';

const initialState = {
    schedule: ["10:00 - 21:00"],
    phone: ["+38 (050) 666-06-33"],
    email: ["carteldruzhbynarodiv@gmail.com"],
};

export default function (state = initialState, action) {
    switch (action.type) {

        case EnvConstants.SET:
            return {...state, ...action.payload};

        default:
            return state;
    }
}