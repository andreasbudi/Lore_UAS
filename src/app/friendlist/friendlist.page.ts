import { Component, OnInit } from '@angular/core';

import * as firebase from "firebase";
import { snapShotToArray } from '../envroinment';
import { AuthService } from '../auth/auth.service';
import { Events } from '@ionic/angular';

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

  constructor(public events: Events,private authSvc: AuthService) {
    this.user = this.authSvc.getUser();
    console.log(this.user);
    var ref = firebase.database().ref('user/'+localStorage.getItem("userid")+'/friends/');
    ref.on('value',resp => {
      this.friends = snapShotToArray(resp);
    });
    this.search_friends= Array({email: ""});
   }
   addItem(item){
    if (item!==undefined && item!==null&& item.name!==""){

      console.log(this.user);
      var ref = firebase.database().ref('user/'+localStorage.getItem("userid")+'/friends/');
      let newItem = ref.push();
      newItem.set(item);
      this.inputText = '';
    }
  }

  searchItem(target){
    var fetched=[];
    var user = this.authSvc.getUser();
    var ref = firebase.database().ref('/list_users');
    
    ref.orderByChild('email').equalTo(target.email).on("value", function(snapshot) {
      snapshot.forEach(function(data) {
        fetched = Array({email: target.email});
      });
      console.log("lewat sini1");
    });
    this.search_friends = fetched;
    console.log("lewat sini2");
    
    
  }

  
  ngOnInit() {
    
  }

}
