import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: "notes", loadChildren: "./home/home.module#HomePageModule" },
  { path: "notes/:id", loadChildren: "./detail/detail.module#DetailPageModule" },  { path: 'friend-list', loadChildren: './friend-list/friend-list.module#FriendListPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
