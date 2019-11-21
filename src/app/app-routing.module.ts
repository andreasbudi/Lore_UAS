import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'details', loadChildren: './pages/note-details/note-details.module#NoteDetailsPageModule' },
  { path: 'details/:id', loadChildren: './pages/note-details/note-details.module#NoteDetailsPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'friend-list', loadChildren: './friend-list/friend-list.module#FriendListPageModule' },
  { path: 'my-booking', loadChildren: './my-booking/my-booking.module#MyBookingPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
