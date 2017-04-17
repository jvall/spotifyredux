import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    SharedModule,
    SearchRoutingModule,
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
