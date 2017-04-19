import {
  Component,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';

import * as fromRoot from '../../reducers';
import * as artistActions from '../../actions/artist';
import { Artist } from '../../models/artist';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class SearchComponent implements OnInit {

  searchQuery$: Observable<string>;
  artists$: Observable<Artist[]>;

  searching = false;

  constructor(private _store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.searchQuery$ = this._store.select(fromRoot.getSearchQuery).take(1);
    this.artists$ = this._store.select(fromRoot.getSearchResults);
    // this.loading$ = this._store.select(fromRoot.getSearchLoading);
  }

  searchKeyed(query: string) {
    this._store.dispatch(new artistActions.SearchAction(query));
  }
}
