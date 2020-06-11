import * as GalleryConstants from '../constants/Gallery';

const initialState = {
    image: [
        '/images/gallery/gallery8.jpg',
        '/images/gallery/gallery2.jpg',
        '/images/gallery/gallery22.jpg',
        '/images/gallery/gallery4.jpg',
        '/images/gallery/gallery5.jpg',
        '/images/gallery/gallery6.jpg',
        '/images/gallery/gallery7.jpg',
        '/images/gallery/gallery1.jpg',
        '/images/gallery/gallery9.jpg',
        '/images/gallery/gallery10.jpg',
        '/images/gallery/gallery11.jpg',
        '/images/gallery/gallery12.jpg',
        '/images/gallery/gallery13.jpg',
        '/images/gallery/gallery19.jpg',
        '/images/gallery/gallery15.jpg',
        '/images/gallery/gallery17.jpg',
        '/images/gallery/gallery16.jpg',
        '/images/gallery/gallery18.jpg',
        '/images/gallery/gallery14.jpg',
        '/images/gallery/gallery20.jpg',
        '/images/gallery/gallery21.jpg',
        '/images/gallery/gallery3.jpg',
        '/images/gallery/gallery23.jpg',
        '/images/gallery/gallery24.jpg',
        '/images/gallery/gallery25.jpg',
        '/images/gallery/gallery30.jpg',
        '/images/gallery/gallery27.jpg',
        '/images/gallery/gallery28.jpg',
        '/images/gallery/gallery29.jpg',
        '/images/gallery/gallery26.jpg',
        '/images/gallery/gallery31.jpg',
        '/images/gallery/gallery32.jpg',
        '/images/gallery/gallery33.jpg',
        '/images/gallery/gallery34.jpg',
        '/images/gallery/gallery35.jpg',
        '/images/gallery/gallery36.jpg',
        '/images/gallery/gallery37.jpg',
        '/images/gallery/gallery38.jpg',
        '/images/gallery/gallery39.jpg',
        '/images/gallery/gallery40.jpg',
        '/images/gallery/gallery41.jpg',
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {

        case GalleryConstants.SET:
            return {...state, ...action.payload};

        default:
            return state;
    }
}