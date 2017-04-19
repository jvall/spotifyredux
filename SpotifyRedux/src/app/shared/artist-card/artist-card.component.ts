import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import * as collection from '../../actions/collection';
import { Artist } from '../../models/artist';

@Component({
  selector: 'artist-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  @Input()
  artist: Artist;

  defaultImgUrl = "/assets/defaultartistpic.png";
  isInCollection$: Observable<boolean>;

  constructor(private _store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isInCollection$ = this._store
      .select(fromRoot.getCollectionArtistIds)
      .map(ids => ids.indexOf(this.artist.id) >= 0);
  }

  addClicked() {
    this._store.dispatch(new collection.AddArtistAction(this.artist));
  }

  removeClicked() {
    this._store.dispatch(new collection.RemoveArtistAction(this.artist));
  }
}
