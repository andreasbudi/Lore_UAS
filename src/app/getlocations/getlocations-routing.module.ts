import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetlocationsPage } from './getlocations.page';

const routes: Routes = [
  {
    path: '',
    component: GetlocationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetlocationsPageRoutingModule {}
