import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DisplaylocationPageRoutingModule } from './displaylocation-routing.module';
import { DisplaylocationPage } from './displaylocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplaylocationPageRoutingModule
  ],
  declarations: [DisplaylocationPage]
})
export class DisplaylocationPageModule {}
