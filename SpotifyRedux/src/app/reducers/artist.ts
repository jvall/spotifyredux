import { ActionReducer, Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as artist from '../actions/artist';
import * as collection from '../actions/collection';
import { Artist } from '../models/artist';

export interface State {
    ids: string[];
    entities: { [id: string]: Artist };
    selectedArtistId?: string;
}

export const initialState: State = {
    ids: [],
    entities: {},
    selectedArtistId: null
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case artist.ActionTypes.SEARCH_COMPLETE:
        case collection.ActionTypes.LOAD_SUCCESS: {
            const artists = action.payload;
            const newArtists = artists.filter(artist => !state.entities[artist.id]);

            const newArtistIds = newArtists.map(artist => artist.id);
            const newArtistEntities = newArtists.reduce((entities: { [id: string]: Artist }, artist: Artist) => {
                return Object.assign(entities, {
                    [artist.id]: artist
                });
            }, {});

            return {
                ids: [...state.ids, ...newArtistIds],
                entities: Object.assign({}, state.entities, newArtistEntities),
                selectedArtistId: state.selectedArtistId
            };
        }

        case artist.ActionTypes.LOAD: {
            const artist = action.payload;

            if (state.ids.indexOf(artist.id) > -1) {
                return state;
            }

            return {
                ids: [...state.ids, artist.id],
                entities: Object.assign({}, state.entities, {
                    [artist.id]: artist
                }),
                selectedArtistId: state.selectedArtistId
            };
        }

        case artist.ActionTypes.SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedArtistId: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */


export const getEntities = (state: State) => {
    return state.entities;
}

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedArtistId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});
