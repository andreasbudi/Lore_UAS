import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LocationPage } from './location.page';
import { IonicStorageModule } from '@ionic/storage';
// import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [LocationPage]
})
export class LocationPageModule {}
