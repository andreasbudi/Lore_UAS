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
  ref = firebase.database().ref('notes/');

  constructor() {
    this.ref.on('value', resp => {
      this.notes = snapshotToArray(resp);
    });
  }
}
