import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController) {}

  ngOnInit(){
    this.notesService.load();
  }

  addNote(){

    this.alertCtrl.create({
      header: 'Add Reminder',
      inputs: [
        {
          type: 'text',
          name: 'title'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.notesService.createNote(data.title);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }
}
