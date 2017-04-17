import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen = false;

  @ViewChild(MdSidenav)
  lol: MdSidenav;

  closeSidenav() {
    this.lol.close();
  }
}
