import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import { Router } from '@angular/router';
import { DataService } from '../location/data.service';

@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.page.html',
  styleUrls: ['./listlocation.page.scss'],
})
export class ListlocationPage implements OnInit {

  Place = [];
  // array = [];
  test = localStorage.getItem('user_key');
  ref = firebase.database().ref('user/'+this.test+'/location');

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.ref.on('value', resp => {
      this.Place = snapshotToArray(resp);
    });
  }

  async deletePlace(key){
    firebase.database().ref('user/'+this.test+key).remove();
  }

  async getDetails(key){
    let lala = firebase.database().ref('user/'+this.test+'/location/'+key);
    let array = [];
    lala.on('value', function(snapshot) {
      console.log(snapshot.val().id);
      const test = {
        id: snapshot.val().id,
        name: snapshot.val().name,
        address: snapshot.val().address,
        lat: snapshot.val().lat,
        lng: snapshot.val().lng,
        types: snapshot.val().types,
        rating: snapshot.val().rating
      };
      array.push(test);
      localStorage.setItem('Place', JSON.stringify(test));
    });

      let res = localStorage.getItem('Place');
      let obj = JSON.parse(res);

      this.router.navigate(['/','displaylocation',obj.id]);
  }

}
