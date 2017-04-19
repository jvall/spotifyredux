import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { SpotifyService } from './services/spotify.service';
import { APP_CONFIG, SPOTIFY_DI_CONFIG } from './app-config';

import { AppComponent } from './app.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

import { reducer } from './reducers';
import { schema } from './schema';
import { ArtistEffects } from './effects/artist';
import { CollectionEffects } from './effects/collection';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(ArtistEffects),
    EffectsModule.run(CollectionEffects),
    DBModule.provideDB(schema)
  ],
  providers: [
    { provide: APP_CONFIG, useValue: SPOTIFY_DI_CONFIG },
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
