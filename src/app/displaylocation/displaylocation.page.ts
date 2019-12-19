import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-location-details',
  templateUrl: './displaylocation.page.html',
  styleUrls: ['./displaylocation.page.scss'],
})
export class DisplaylocationPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private router: Router, private loadingCtrl: LoadingController, private modalCtrl: ModalController) { }

  ngOnInit() {
    // if (this.route.snapshot.data['special']) {
    //   this.data = this.route.snapshot.data['special'];
    // }
    let res = localStorage.getItem('Place');
    let obj = JSON.parse(res);
    // console.log(obj[0].id)
    if(obj == null){
      this.data = [];
    }else{
      this.data = obj;
    }
    // let test = localStorage.getItem('userid');
    // console.log(test);
    // return this.data;
  }
  
  onClear(){
    localStorage.removeItem('Place');
  }
}
