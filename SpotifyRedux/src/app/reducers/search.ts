import { ActionReducer, Action } from '@ngrx/store';

import * as artist from '../actions/artist';


export interface State {
    ids: string[];
    loading: boolean;
    query: string;
};

const initialState: State = {
    ids: [],
    loading: false,
    query: ''
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case artist.ActionTypes.SEARCH: {
            const query = action.payload;

            if (query === '') {
                return {
                    ids: [],
                    loading: false,
                    query: ''
                };
            }

            return Object.assign({}, state, {
                query,
                loading: true
            });
        }

        case artist.ActionTypes.SEARCH_COMPLETE: {
            const artists = action.payload;

            return {
                ids: artists.map(artist => artist.id),
                loading: false,
                query: state.query
            };
        }

        default: {
            return state;
        }
    }
}


export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;
