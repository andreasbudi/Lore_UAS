import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavController, NavParams } from '@ionic/angular';
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
  ref = firebase.database().ref('user/'+localStorage.getItem("userid")+'/friends/');
  refNote = firebase.database().ref('notes/');
  inputDate:string='';
  inputTime:string='';

  constructor(private modalController: ModalController,
              private route: ActivatedRoute,
              public navParams:NavParams,
              private loadingController: LoadingController,
              private navController: NavController,) {
    var ref = firebase.database().ref('user/'+localStorage.getItem("userid")+'/friends/');
    ref.on('value',resp => {
      this.friends = snapShotToArray(resp);
    });
    this.noteId = this.navParams.get('key1');
    console.log(this.noteId);
   }

   ngOnInit() {

  }

  
  async saveNote(note) {
    const loading = await this.loadingController.create({
      message: 'Saving Note...'
    });
    await loading.present();
    // ini update 

      firebase.database().ref('notes/'+this.noteId).update({remindDate:note.remindDate,remindTime:note.remindTime}).then(() => {
        loading.dismiss();
        this.modalController.dismiss();
      });
      this.navController.navigateBack('home');
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
