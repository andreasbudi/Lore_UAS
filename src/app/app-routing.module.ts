import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  {
    path: "notes",
    loadChildren: "./home/home.module#HomePageModule",
    canLoad: [AuthGuard]
  },
  {
    path: "notes/:id",
    loadChildren: "./detail/detail.module#DetailPageModule",
    canLoad: [AuthGuard]
  },
  { path: 'friend-list', loadChildren: './friend-list/friend-list.module#FriendListPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
