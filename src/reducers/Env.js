import * as EnvConstants from '../constants/Env';

const initialState = {
    currencies: [],
    branches: [],
    deliveryMethods: [],
    dsServices: [],
    phones: [],
    messengers:[],

    myManager: {},
    myCustomer: {},
    myAgreement: {},
    myStore: {},
    myBranch: {},
    myCurrency: {},
    miniCart: [],
    myDebt: {
        debt: '4 525,92 грн',
        overtime: '1 335 758,02 грн'
    },
    content: {
        thank: ''
    }
};

export default function (state = initialState, action) {
    switch (action.type) {

        case EnvConstants.SET:
            return {...state, ...action.payload};

        case EnvConstants.SET_MINI_CART:
            return {...state, miniCart: action.payload};

        default:
            return state;
    }
}