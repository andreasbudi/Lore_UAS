import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavController, NavParams, PopoverController } from '@ionic/angular';
import * as firebase from "firebase";
import { snapShotToArray } from 'src/app/envroinment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  friends = [];
  noteId = null;
  ref = firebase.database().ref('user/'+localStorage.getItem("user_key")+'/friends/');
  inputDate:string='';
  inputTime:string='';
  inputPlace:string='';
  inputFriend:string='';

  Place = [];
  test = localStorage.getItem('user_key');
  placeref = firebase.database().ref('user/'+this.test+'/location');

  constructor(private modalController: ModalController,
              private route: ActivatedRoute,
              public navParams:NavParams,
              private loadingController: LoadingController,
              private navController: NavController,
              public popoverController: PopoverController,) {
    var ref = firebase.database().ref('user/'+localStorage.getItem("user_key")+'/friends/');
    ref.on('value',resp => {
      this.friends = snapShotToArray(resp);
    });

    this.placeref.on('value', resp => {
      this.Place = snapShotToArray(resp);
    });
    this.noteId = this.navParams.get('key1');
   }

   ngOnInit() {

  }

  
  async saveNote(note) {
    const loading = await this.loadingController.create({
      message: 'Saving Note...'
    });
    await loading.present();
    // ini update 
    console.log(note);
      firebase.database().ref('user/'+localStorage.getItem("user_key")+'/notes/'+ this.noteId).update({remindDate:note.remindDate,remindFriend:note.remindFriend,remindPlace:note.remindPlace,remindTime:note.remindTime}).then(() => {
        loading.dismiss();
        this.modalController.dismiss();
      });
      this.popoverController.dismiss();
      this.navController.navigateBack('home');
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
