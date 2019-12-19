import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplaylocationPage } from './displaylocation.page';

const routes: Routes = [
  {
    path: '',
    component: DisplaylocationPage
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplaylocationPageRoutingModule {}
