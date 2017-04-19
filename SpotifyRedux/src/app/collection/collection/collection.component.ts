import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';

import * as fromRoot from '../../reducers';
import { Artist } from '../../models/artist';

@Component({
  selector: 'collection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  artists$: Observable<Artist[]>;

  constructor(private _store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.artists$ = this._store.select(fromRoot.getArtistCollection);
  }
}
