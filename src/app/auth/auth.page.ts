import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SignUpComponent } from './sign-up/sign-up.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private modalCtrl: ModalController, private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(f: NgForm) {
    this.authSvc.login(f.value.email, f.value.pwd).subscribe(
      resp => {
        if (resp.idToken) {
          console.log(resp);
          this.user_key(resp.email);
          this.router.navigateByUrl('/home');
        } else {
          console.log('Login Failed');
        }
      },
      errorResp => {
        console.log(errorResp);
      }
    );
  }

  user_key(email){
    console.log(email);
    var ref = firebase.database().ref('/user');
    
    ref.orderByChild('email').equalTo(email).on("value", function(snapshot) {
      snapshot.forEach(function(data) {
        console.log(data.key);
        localStorage.setItem("user_key",data.key);
        localStorage.setItem("user_email",email);
      });
      console.log("lewat sini1");
    });
  }
  async presentSignUpModal() {
    const modal = await this.modalCtrl.create({
      component: SignUpComponent
    });
    return await modal.present();
  }


}
