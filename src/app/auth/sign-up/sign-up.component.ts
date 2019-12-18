import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private authSvc: AuthService) { }

  ngOnInit() { }

  onSignUp(f: NgForm) {
    console.log(f.value);
    this.authSvc.signup(f.value.email, f.value.pwd).subscribe(resp => {
      console.log(resp);
      firebase.database().ref('user/'+resp.localId).push().set({"email":resp.email,"localID":resp.localId});
      firebase.database().ref('list_users/').push().set({"email":resp.email,"localID":resp.localId});
      this.modalCtrl.dismiss();
    }); 
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
