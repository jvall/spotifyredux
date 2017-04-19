import { Action } from '@ngrx/store';
import { Artist } from '../models/artist';

import { type } from '../type-util';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export const ActionTypes = {
    SEARCH: type('[Artist] Search'),
    SEARCH_COMPLETE: type('[Artist] Search Complete'),
    LOAD: type('[Artist] Load'),
    SELECT: type('[Artist] Select'),
};


export class SearchAction implements Action {
    type = ActionTypes.SEARCH;

    constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
    type = ActionTypes.SEARCH_COMPLETE;

    constructor(public payload: Artist[]) { }
}

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor(public payload: Artist) { }
}

export class SelectAction implements Action {
    type = ActionTypes.SELECT;

    constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = SearchAction
    | SearchCompleteAction
    | LoadAction
    | SelectAction;
