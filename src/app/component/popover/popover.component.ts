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
  ref = firebase.database().ref('user/'+localStorage.getItem("user_key")+'/notes/');
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
      firebase.database().ref('user/'+localStorage.getItem("user_key")+'/notes/').remove();
      this.popoverController.dismiss();
      this.navController.navigateBack('home');
     }

     async presentModal() {
      const modal = await this.modalController.create({
        component: ModalComponent,
        componentProps:{key1:this.noteId},
        cssClass: 'modal-fullscreen',
      });
      return await modal.present();
    }
}
