import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from '../shared/map-modal/map-modal.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async onPickLocation() {
        const modal = await this.modalCtrl.create({
          component: MapModalComponent
        });
        modal.onDidDismiss().then((modalData) => {
          console.log(modalData.data);
        });
        return await modal.present();
      }
    

}
