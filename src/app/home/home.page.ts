import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  notes;
  ref = firebase.database().ref('user/'+localStorage.getItem("user_key")+'/notes/');

  constructor() {
    this.ref.on('value', resp => {
      this.notes = snapshotToArray(resp);
      console.log("ini dari home");
      console.log(this.notes);
    });
  }
}
