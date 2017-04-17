import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subject, Subscription } from 'rxjs/Rx';

import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/artist';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchSub: Subscription;
  searchStream$ = new Subject<string>();
  searching = false;
  artists: Artist[];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.searchSub = this.searchStream$
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(val => val != "")
      .subscribe(query => this.search(query));
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }

  searchKeyed(query: string) {
    this.searchStream$.next(query);
  }

  private search(query: string) {
    this.searching = true;

    this._spotifyService.searchArtists(query)
      .subscribe(artists => {
        this.searching = false;
        this.artists = artists;
      });
  }
}
