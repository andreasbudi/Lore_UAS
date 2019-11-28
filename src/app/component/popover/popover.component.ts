import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams, NavController, PopoverController } from '@ionic/angular';
import * as firebase from 'firebase';

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
    public popoverController: PopoverController) { 
      this.noteId = this.navParams.get('key1');
    }

    ngOnInit() {}

    removeNote() {
      firebase.database().ref('notes/'+this.noteId).remove();
      this.popoverController.dismiss();
      this.navController.navigateBack('home');
     }
}
