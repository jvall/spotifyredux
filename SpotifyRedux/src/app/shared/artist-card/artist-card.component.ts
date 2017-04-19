import {
  Component,
  Input
} from '@angular/core';
import { Artist } from '../../models/artist';

@Component({
  selector: 'artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent {
  @Input()
  artist: Artist;

  defaultImgUrl = "/assets/defaultartistpic.png";

  constructor() { }
}
