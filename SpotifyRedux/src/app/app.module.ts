import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { SpotifyService } from './services/spotify.service';
import { APP_CONFIG, SPOTIFY_DI_CONFIG } from './app.config';

import { AppComponent } from './app.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

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
    AppRoutingModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: SPOTIFY_DI_CONFIG },
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
