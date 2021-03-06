import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

import { Artist } from '../models/artist';
import { AppConfig } from '../app-config.interface';
import { APP_CONFIG } from '../app-config';

@Injectable()
export class SpotifyService {

  constructor( @Inject(APP_CONFIG) private _config: AppConfig, private _http: Http) { }

  searchArtists(artistName: string): Observable<Artist[]> {
    return this._http.get(`${this._config.spotifyUrl}/search?q=${artistName}&type=artist`)
      .map(res => res.json().artists.items || []);
  }
}
