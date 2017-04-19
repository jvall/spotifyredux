import * as collection from '../actions/collection';
import { Artist } from '../models/artist';
import { ActionReducer, Action } from '@ngrx/store';

export interface State {
    loaded: boolean;
    loading: boolean;
    ids: string[];
};

const initialState: State = {
    loaded: false,
    loading: false,
    ids: []
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case collection.ActionTypes.LOAD: {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case collection.ActionTypes.LOAD_SUCCESS: {
            const artists = action.payload;

            return {
                loaded: true,
                loading: false,
                ids: artists.map(artist => artist.id)
            };
        }

        case collection.ActionTypes.ADD_ARTIST_SUCCESS:
        case collection.ActionTypes.REMOVE_ARTIST_FAIL: {
            const artist = action.payload;

            if (state.ids.indexOf(artist.id) > -1) {
                return state;
            }

            return Object.assign({}, state, {
                ids: [...state.ids, artist.id]
            });
        }

        case collection.ActionTypes.REMOVE_ARTIST_SUCCESS:
        case collection.ActionTypes.ADD_ARTIST_FAIL: {
            const artist = action.payload;

            return Object.assign({}, state, {
                ids: state.ids.filter(id => id !== artist.id)
            });
        }

        default: {
            return state;
        }
    }
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
