import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../component/popover/popover.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {

  noteId = null;

  notes;
  ref = firebase.database().ref('user/'+localStorage.getItem("user_key")+'/notes/');
  inputText:string = '';

  //coba
  current_note;

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private navController: NavController,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.noteId = this.route.snapshot.params['id'];
    this.current_note = firebase.database().ref('user/'+localStorage.getItem("user_key")+'/notes/'+ this.noteId);
    this.ref.on("child_added", function(snapshot) {
      console.log(snapshot.val().name);
    });
    
  }

   async saveNote(note) {
    const loading = await this.loadingController.create({
      message: 'Saving Note...'
    });
    await loading.present();
    // ini update 
    if (this.noteId) {
      firebase.database().ref('user/'+localStorage.getItem("user_key")+'/notes/'+ this.noteId).update({name:note.name}).then(() => {
        loading.dismiss();
      });
      this.navController.navigateBack('home');
    }else {
      // ini push
      
      let newNote = this.ref.push();
      note.createdAt=new Date().getTime();
      note.remindDate='';
      note.remindTime='';
      note.remindPlace='';
      newNote.set(note).then(() => {
        loading.dismiss();
      });
      // newNote.set({note,createdAt:this.createdAt});
      this.navController.navigateBack('home');
    }
  }

  async presentPopover(ev: any ) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps:{key1:this.noteId},
      event: ev,
      translucent: true
    });
    if (this.noteId != null) {
      return await popover.present();
    } else {
      popover.dismiss();
    }
  }

}
