import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { JoinGenresPipe } from './pipes/join-genres.pipe';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ArtistCardComponent
  ],
  declarations: [
    ArtistCardComponent,
    JoinGenresPipe
  ]
})
export class SharedModule { }
