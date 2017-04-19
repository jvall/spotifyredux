import { compose } from '@ngrx/core/compose';
import { combineReducers, ActionReducer } from '@ngrx/store';

import { createSelector } from 'reselect';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';
import * as fromArtist from './artist';
import * as fromSearch from './search';
import * as fromCollection from './collection';

/**
 * Define overall application state, i.e. its "database"
 */

export interface State {
    artists: fromArtist.State;
    search: fromSearch.State;
    collection: fromCollection.State;
}

/**
 * Define the reducers that give us specific data from the state, perhaps like 'tables'
 */

const reducers = {
    search: fromSearch.reducer,
    artists: fromArtist.reducer,
    collection: fromCollection.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);


export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}


/** 
 * Artist selectors
 */

export const getArtistState = (state: State) => state.artists;

export const getArtistEntities = createSelector(getArtistState, fromArtist.getEntities);
export const getArtistIds = createSelector(getArtistState, fromArtist.getIds);
export const getSelectedArtistId = createSelector(getArtistState, fromArtist.getSelectedId);
export const getSelectedArtist = createSelector(getArtistState, fromArtist.getSelected);

/** 
 * Search selectors
 */

export const getSearchState = (state: State) => state.search;

export const getSearchArtistIds = createSelector(getSearchState, fromSearch.getIds);

export const getSearchQuery = createSelector(getSearchState, fromSearch.getQuery);

export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);

export const getSearchResults = createSelector(getArtistEntities, getSearchArtistIds, (artists, searchIds) => {
    return searchIds.map(id => artists[id]);
});


/** 
 * Collection selectors
 */

export const getCollectionState = (state: State) => state.collection;

export const getCollectionLoaded = createSelector(getCollectionState, fromCollection.getLoaded);
export const getCollectionLoading = createSelector(getCollectionState, fromCollection.getLoading);
export const getCollectionArtistIds = createSelector(getCollectionState, fromCollection.getIds);

export const getArtistCollection = createSelector(getArtistEntities, getCollectionArtistIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});


export const isSelectedBookInCollection = createSelector(getCollectionArtistIds, getSelectedArtistId, (ids, selected) => {
    return ids.indexOf(selected) > -1;
});

