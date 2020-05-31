import * as BarbersConstants from '../constants/Barbers';
import * as AppConstants from "../constants/App";

const initialState = {
    barbers: [
        {
            id: 1,
            name: "Anton Losev",
            rank: "Top barber",
            image: "/images/barbers/barber1.jpg",
            imageFull: "/images/barbers/barberFull1.jpg",
        },
        {
            id: 2,
            name: "Vladimir Losev",
            rank: "Barber",
            image: "/images/barbers/barber2.jpg",
            imageFull: "/images/barbers/barberFull2.jpg",
        },
        {
            id: 3,
            name: "Aziz",
            rank: "Barber",
            image: "/images/barbers/barber3.jpg",
            imageFull: "/images/barbers/barberFull3.jpg",
        },
    ],

    data: AppConstants.EMPTY_PAGINATOR,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case BarbersConstants.SET:
            return {...state, ...action.payload};

        case BarbersConstants.SET_DATA:
            return {...state, data: action.payload};

        default:
            return state;
    }
}