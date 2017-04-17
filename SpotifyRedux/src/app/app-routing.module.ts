import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule,
    PreloadAllModules,
} from '@angular/router';

import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/collection' },
    {
        path: 'collection',
        loadChildren: 'app/collection/collection.module#CollectionModule',
    },
    { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        useHash: true
    })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
