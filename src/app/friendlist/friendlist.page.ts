import { Component, OnInit } from '@angular/core';

import * as firebase from "firebase";
import { snapShotToArray } from '../envroinment';
import { AuthService } from '../auth/auth.service';
import { Events, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.page.html',
  styleUrls: ['./friendlist.page.scss'],
})
export class FriendlistPage implements OnInit {
  friends = [];
  search_friends= [];
  user = "null";
  inputText:string;

  constructor(public events: Events,private authSvc: AuthService, private alertController : AlertController) {
    this.user = this.authSvc.getUser();
    console.log(this.user);
    var ref = firebase.database().ref('user/'+localStorage.getItem("user_key")+'/friends/');
    ref.on('value',resp => {
      this.friends = snapShotToArray(resp);
    });
    // this.search_friends= Array({email: ""});
    this.search_friends= null;
    console.log(this.search_friends);
   }
   addItem(item){
    if (item!==undefined && item!==null&& item.name!==""){
      var ref = firebase.database().ref('user/'+localStorage.getItem("user_key")+'/friends/');
      ref.orderByChild("email").equalTo(item.email).once("value",snapshot => {
          if (snapshot.exists()){
            const userData = snapshot.val();
            console.log("exists!", userData);
          }
          else{
            let newItem = ref.push();
            newItem.set(item);
            this.inputText = '';
          }
      });
      
      
    }
  }
  deleteItem(item){
    firebase.database().ref('user/'+localStorage.getItem("user_key")+'/friends/'+item.key).remove();
  }
  searchItem(target){
    var fetched=[];
    var user = this.authSvc.getUser();
    var ref = firebase.database().ref('/user');
    if(target.email==localStorage.getItem("user_email")){
      fetched = Array({email: "YOU CANT ADD YOURSELF"});
    }
    else{
      ref.orderByChild('email').equalTo(target.email).on("value", function(snapshot) {
        snapshot.forEach(function(data) {
          fetched = Array({email: target.email});
        });
        console.log("lewat sini1");
      });
    }
    // ref.orderByChild('email').equalTo(target.email).on("value", function(snapshot) {
    //   snapshot.forEach(function(data) {
    //     fetched = Array({email: target.email});
    //   });
    //   console.log("lewat sini1");
    // });
    this.search_friends = fetched;
    console.log("lewat sini2");
    
    
  }
  // 'Are you sure you want to remove '+data.email+' from your friendlist?'
  async alert(data) {
    const alert = await this.alertController.create({
      header: 'Remove Friend.',
      message: 'Are you sure you want to remove '+data.email+' from your friendlist?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Remove',
          handler: () => {
            this.deleteItem(data);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
    
  }

}
