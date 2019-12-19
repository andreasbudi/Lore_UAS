import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ResolveService } from '../app/location/resolve.service';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'details', loadChildren: './note-details/note-details.module#NoteDetailsPageModule' },
  { path: 'details/:id', loadChildren: './note-details/note-details.module#NoteDetailsPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule'},
  { path: 'location-details/:id',
    resolve: {
      special: ResolveService
    },
    loadChildren: './location-details/location-details.module#LocationDetailsPageModule'
  },
  { path: 'listlocation', loadChildren: './listlocation/listlocation.module#ListlocationPageModule'},
  { path: 'friendlist', loadChildren: './friendlist/friendlist.module#FriendlistPageModule' },
  // { path: 'location-details', loadChildren: './location-details/location-details.module#LocationDetailsPageModule'},
  { path: 'getlocations',loadChildren: ('./getlocations/getlocations.module#GetlocationsPageModule')},
  {
    path: 'displaylocation',
    loadChildren: () => import('./displaylocation/displaylocation.module').then( m => m.DisplaylocationPageModule)
  },
  { path: 'displaylocation/:id',
    resolve: {
      special: ResolveService
    },
    loadChildren: './displaylocation/displaylocation.module#DisplaylocationPageModule'
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
