import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

import { Artist } from '../models/artist';
import { AppConfig } from '../models/app-config';
import { APP_CONFIG } from '../app.config';

@Injectable()
export class SpotifyService {

  constructor( @Inject(APP_CONFIG) private _config: AppConfig, private _http: Http) { }

  searchArtists(artistName: string): Observable<Artist[]> {
    return this._http.get(`${this._config.spotifyUrl}/search?q=${artistName}&type=artist`)
      .map(res => res.json().artists.items || []);
  }

  // Well this was a nice idea but not needed
  // searchArtists(artistName: string): Observable<Artist> {
  //   return this._http.get(`${this._config.spotifyUrl}/artists?type=artist&q=${artistName}`)
  //     .mergeMap(response => Observable.from(response.json().items))
  //     .map(rawArtist => this.mapResponseToArtist(rawArtist));
  // }

  // private mapResponseToArtist(rawArtistObject: any): Artist {
  //   return {
  //     name: rawArtistObject.name,
  //     imageUrl: rawArtistObject.images[1].url,
  //     genres: rawArtistObject.genres
  //   };
  // }
}
