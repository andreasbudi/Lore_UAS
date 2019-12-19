import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListlocationPage } from './listlocation.page';

const routes: Routes = [
  {
    path: '',
    component: ListlocationPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListlocationPageRoutingModule {}
