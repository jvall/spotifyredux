import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';

import * as fromRoot from '../../reducers';
import * as artistActions from '../../actions/artist';
import { Artist } from '../../models/artist';

@Component({
  selector: 'search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery$: Observable<string>;
  artists$: Observable<Artist[]>;
  loading$: Observable<boolean>;

  constructor(private _store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.searchQuery$ = this._store.select(fromRoot.getSearchQuery).take(1);
    this.artists$ = this._store.select(fromRoot.getSearchResults);
    this.loading$ = this._store.select(fromRoot.getSearchLoading);
  }

  searchKeyed(query: string) {
    this._store.dispatch(new artistActions.SearchAction(query));
  }
}
