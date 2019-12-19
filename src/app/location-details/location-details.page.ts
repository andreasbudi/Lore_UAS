import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private router: Router, private loadingCtrl: LoadingController, private modalCtrl: ModalController) { }

  ngOnInit() {
    // if (this.route.snapshot.data['special']) {
    //   this.data = this.route.snapshot.data['special'];
    // }
    let res = localStorage.getItem('Place');
    let obj = JSON.parse(res);
    // console.log(obj[0].id)
    if(obj[0] == null){
      this.data = [];
    }else{
      this.data = obj[0];
    }
    // let test = localStorage.getItem('userid');
    // console.log(test);
    // return this.data;
  }

  savePlace(){
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Save Location ...'
    })
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        let res = localStorage.getItem('Place');
        let obj = JSON.parse(res);
        let test = localStorage.getItem('userid');
        firebase.database().ref('place/'+test).push().set({
          "id":obj[0].id,
          "name":obj[0].name,
          "address":obj[0].address,
          "lat":obj[0].lat,
          "lng":obj[0].lng,
          "rating":obj[0].rating
        });
        loadingEl.dismiss();
        // this.modalCtrl.dismiss({message: 'Location Saved!'},
        // 'Confirm');
        localStorage.removeItem('Place');
        this.router.navigate(['/','listlocation']);
      }, 1000)
    });
  }
  onClear(){
    localStorage.removeItem('Place');
  }
}
