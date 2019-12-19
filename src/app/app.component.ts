import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

// import { FcmService } from '../app/fcm.service';
// import { ToastService } from './shared/service/toast.service';
import { ToastController } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router, 
    private authSvc: AuthService,
    // private fcm: FcmService,
    // private toastr: ToastService,
    public toastController: ToastController,
    // private geolocation: Geolocation
  ) {
    this.initializeApp();
  }

  // private async presentToast(message) {
  //   const toast = await this.toastController.create({
  //     message,
  //     duration: 3000
  //   });
  //   toast.present();
  // }
  
  // private notificationSetup() {
  //   this.fcm.getToken();
  //   this.fcm.onNotifications().subscribe(
  //     (msg) => {
  //       if (this.platform.is('ios')) {
  //         this.presentToast(msg.aps.alert);
  //       } else {
  //         this.presentToast(msg.body);
  //       }
  //     });
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.notificationSetup();
    });
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  onLogout() {
    this.authSvc.logout();
    this.router.navigateByUrl('/auth');
  }
}
