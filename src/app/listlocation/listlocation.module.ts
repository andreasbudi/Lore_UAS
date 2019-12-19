import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListlocationPageRoutingModule } from './listlocation-routing.module';

import { ListlocationPage } from './listlocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListlocationPageRoutingModule
  ],
  declarations: [ListlocationPage]
})
export class ListlocationPageModule {}
