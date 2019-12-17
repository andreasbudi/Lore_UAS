import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams, NavController, PopoverController, ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  notes;
  ref = firebase.database().ref('notes/');
  noteId = null;

  constructor(
    private route: ActivatedRoute,
    public navParams:NavParams,
    private navController: NavController,
    public popoverController: PopoverController,
    private modalController: ModalController) { 
      this.noteId = this.navParams.get('key1');
    }

    ngOnInit() {}

    removeNote() {
      firebase.database().ref('notes/'+this.noteId).remove();
      this.popoverController.dismiss();
      this.navController.navigateBack('home');
     }

     async presentModal() {
      const modal = await this.modalController.create({
        component: ModalComponent,
        cssClass: 'modal-fullscreen',
      });
      return await modal.present();
    }
}
