import { Action } from '@ngrx/store';
import { Artist } from '../models/artist';
import { type } from '../type-util';


export const ActionTypes = {
    ADD_ARTIST: type('[Collection] Add Artist'),
    ADD_ARTIST_SUCCESS: type('[Collection] Add Artist Success'),
    ADD_ARTIST_FAIL: type('[Collection] Add Artist Fail'),
    REMOVE_ARTIST: type('[Collection] Remove Artist'),
    REMOVE_ARTIST_SUCCESS: type('[Collection] Remove Artist Success'),
    REMOVE_ARTIST_FAIL: type('[Collection] Remove Artist Fail'),
    LOAD: type('[Collection] Load'),
    LOAD_SUCCESS: type('[Collection] Load Success'),
    LOAD_FAIL: type('[Collection] Load Fail'),
};


/**
 * Add Artist to Collection Actions
 */
export class AddArtistAction implements Action {
    type = ActionTypes.ADD_ARTIST;

    constructor(public payload: Artist) { }
}

export class AddArtistSuccessAction implements Action {
    type = ActionTypes.ADD_ARTIST_SUCCESS;

    constructor(public payload: Artist) { }
}

export class AddArtistFailAction implements Action {
    type = ActionTypes.ADD_ARTIST_FAIL;

    constructor(public payload: Artist) { }
}


/**
 * Remove Artist from Collection Actions
 */
export class RemoveArtistAction implements Action {
    type = ActionTypes.REMOVE_ARTIST;

    constructor(public payload: Artist) { }
}

export class RemoveArtistSuccessAction implements Action {
    type = ActionTypes.REMOVE_ARTIST_SUCCESS;

    constructor(public payload: Artist) { }
}

export class RemoveArtistFailAction implements Action {
    type = ActionTypes.REMOVE_ARTIST_FAIL;

    constructor(public payload: Artist) { }
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor() { }
}

export class LoadSuccessAction implements Action {
    type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: Artist[]) { }
}

export class LoadFailAction implements Action {
    type = ActionTypes.LOAD_FAIL;

    constructor(public payload: any) { }
}


export type Actions
    = AddArtistAction
    | AddArtistSuccessAction
    | AddArtistFailAction
    | RemoveArtistAction
    | RemoveArtistSuccessAction
    | RemoveArtistFailAction
    | LoadAction
    | LoadSuccessAction
    | LoadFailAction;
