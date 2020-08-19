import * as GalleryConstants from '../constants/Gallery';

const initialState = {
    photos: [
        {
            image: '/images/gallery/gallery1.jpg',
            imageFull: '/images/gallery/imageFull/gallery1.jpg',
        },
        {
            image: '/images/gallery/gallery2.jpg',
            imageFull: '/images/gallery/imageFull/gallery2.jpg',
        },
        {
            image: '/images/gallery/gallery3.jpg',
            imageFull: '/images/gallery/imageFull/gallery3.jpg',
        },
        {
            image: '/images/gallery/gallery4.jpg',
            imageFull: '/images/gallery/imageFull/gallery4.jpg',
        },
        {
            image: '/images/gallery/gallery5.jpg',
            imageFull: '/images/gallery/imageFull/gallery5.jpg',
        },{
            image: '/images/gallery/gallery6.jpg',
            imageFull: '/images/gallery/imageFull/gallery6.jpg',
        },{
            image: '/images/gallery/gallery7.jpg',
            imageFull: '/images/gallery/imageFull/gallery7.jpg',
        },{
            image: '/images/gallery/gallery8.jpg',
            imageFull: '/images/gallery/imageFull/gallery8.jpg',
        },{
            image: '/images/gallery/gallery9.jpg',
            imageFull: '/images/gallery/imageFull/gallery9.jpg',
        },{
            image: '/images/gallery/gallery10.jpg',
            imageFull: '/images/gallery/imageFull/gallery10.jpg',
        },{
            image: '/images/gallery/gallery11.jpg',
            imageFull: '/images/gallery/imageFull/gallery11.jpg',
        },{
            image: '/images/gallery/gallery12.jpg',
            imageFull: '/images/gallery/imageFull/gallery12.jpg',
        },{
            image: '/images/gallery/gallery13.jpg',
            imageFull: '/images/gallery/imageFull/gallery13.jpg',
        },{
            image: '/images/gallery/gallery14.jpg',
            imageFull: '/images/gallery/imageFull/gallery14.jpg',
        },{
            image: '/images/gallery/gallery15.jpg',
            imageFull: '/images/gallery/imageFull/gallery15.jpg',
        },{
            image: '/images/gallery/gallery16.jpg',
            imageFull: '/images/gallery/imageFull/gallery16.jpg',
        },{
            image: '/images/gallery/gallery17.jpg',
            imageFull: '/images/gallery/imageFull/gallery17.jpg',
        },{
            image: '/images/gallery/gallery18.jpg',
            imageFull: '/images/gallery/imageFull/gallery18.jpg',
        },{
            image: '/images/gallery/gallery19.jpg',
            imageFull: '/images/gallery/imageFull/gallery19.jpg',
        },{
            image: '/images/gallery/gallery20.jpg',
            imageFull: '/images/gallery/imageFull/gallery20.jpg',
        },
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