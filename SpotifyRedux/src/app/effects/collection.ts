import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as collection from '../actions/collection';
import { Artist } from '../models/artist';


@Injectable()
export class CollectionEffects {

    /**
     * This effect does not yield any actions back to the store. Set
     * `dispatch` to false to hint to @ngrx/effects that it should
     * ignore any elements of this effect stream.
     *
     * The `defer` observable accepts an observable factory function
     * that is called when the observable is subscribed to.
     * Wrapping the database open call in `defer` makes
     * effect easier to test.
     */
    @Effect({ dispatch: false })
    openDB$: Observable<any> = defer(() => {
        return this.db.open('wmp_spotify_app');
    });

    /**
     * This effect makes use of the `startWith` operator to trigger
     * the effect immediately on startup.
     */
    @Effect()
    loadCollection$: Observable<Action> = this.actions$
        .ofType(collection.ActionTypes.LOAD)
        .startWith(new collection.LoadAction())
        .switchMap(() =>
            this.db.query('artists')
                .toArray()
                .map((artists: Artist[]) => new collection.LoadSuccessAction(artists))
                .catch(error => of(new collection.LoadFailAction(error)))
        );

    @Effect()
    addArtistToCollection$: Observable<Action> = this.actions$
        .ofType(collection.ActionTypes.ADD_ARTIST)
        .map((action: collection.AddArtistAction) => action.payload)
        .mergeMap(artist =>
            this.db.insert('artists', [artist])
                .map(() => new collection.AddArtistSuccessAction(artist))
                .catch(() => of(new collection.AddArtistFailAction(artist)))
        );


    @Effect()
    removeArtistFromCollection$: Observable<Action> = this.actions$
        .ofType(collection.ActionTypes.REMOVE_ARTIST)
        .map((action: collection.RemoveArtistAction) => action.payload)
        .mergeMap(artist =>
            this.db.executeWrite('artists', 'delete', [artist.id])
                .map(() => new collection.RemoveArtistSuccessAction(artist))
                .catch(() => of(new collection.RemoveArtistFailAction(artist)))
        );

    constructor(private actions$: Actions, private db: Database) { }
}
