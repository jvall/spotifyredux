import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection/collection.component';

const routes: Routes = [
    {
        path: '',
        component: CollectionComponent,
        children: []
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CollectionRoutingModule { }
