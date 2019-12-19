import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopoverComponent } from './component/popover/popover.component';
import { ModalComponent } from './component/modal/modal.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCCljPsrOdqBTx2fMTrnwsb0TMPEyJKys4",
  authDomain: "lore-93517.firebaseapp.com",
  databaseURL: "https://lore-93517.firebaseio.com",
  projectId: "lore-93517",
  storageBucket: "lore-93517.appspot.com",
  messagingSenderId: "1052217568726",
  appId: "1:1052217568726:web:9cee17c5af0385562a0877",
  measurementId: "G-83T712NF3H"
};

@NgModule({
  declarations: [AppComponent, PopoverComponent,ModalComponent],
  entryComponents: [PopoverComponent,ModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  HttpClientModule,FormsModule,
  AngularFireModule.initializeApp(FIREBASE_CONFIG),
  AngularFirestoreModule,
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
