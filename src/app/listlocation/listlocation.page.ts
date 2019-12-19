import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';

@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.page.html',
  styleUrls: ['./listlocation.page.scss'],
})
export class ListlocationPage implements OnInit {

  Place = [];
  test = localStorage.getItem('userid');
  ref = firebase.database().ref('place/'+this.test);

  constructor() { }

  ngOnInit() {
    this.ref.on('value', resp => {
      this.Place = snapshotToArray(resp);
    });
  }

  async deletePlace(key){
    firebase.database().ref('place/'+this.test+key).remove();
  }

}
