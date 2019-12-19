import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetlocationsPageRoutingModule } from './getlocations-routing.module';

import { GetlocationsPage } from './getlocations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetlocationsPageRoutingModule
  ],
  declarations: [GetlocationsPage]
})
export class GetlocationsPageModule {}
