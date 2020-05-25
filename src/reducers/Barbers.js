import * as BarbersConstants from '../constants/Barbers';

const initialState = {
    barbers: [
        {
            id: 1,
            name: "Anton Losev",
            rank: "Top barber",
            image: "/images/barbers/barber1.jpg"
        },
        {
            id: 2,
            name: "Vladimir Losev",
            rank: "Barber",
            image: "/images/barbers/barber2.jpg"
        },
        {
            id: 3,
            name: "Aziz",
            rank: "Barber",
            image: "/images/barbers/barber3.jpg"
        },
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {

        case BarbersConstants.SET:
            return {...state, ...action.payload};

        default:
            return state;
    }
}