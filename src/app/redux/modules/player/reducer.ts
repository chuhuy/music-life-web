import { PLAY, PAUSE, SKIP } from './actions';
import { Action } from './../../../models/redux/Action';
import { Song } from '../../../models/song';

const initialState: Song = {
    isPlaying: false,
    title: '',
    artists: '',
    url: '',
    id: 0,
    image_url: '',
};

export const playerReducer = (state: Song = initialState, action: Action) => {
    switch (action.type) {
        case PLAY:
            return {
                ...state,
                isPlaying: true,
            };
        case PAUSE:
            return {
                ...state,
                isPlaying: false,
            };
        case SKIP:
            return {
                ...state,
                id: action.payload.id,
                title: action.payload.title,
                artists: action.payload.artists,
                url: action.payload.url,
                image_url: action.payload.image_url,
            };
        default:
            return state;
    }
};
