import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FIREBASE_CONFIG } from 'src/environments/environment';
import * as firebase from 'firebase';

interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  userId = null;
  
  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
      return this.http.post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_CONFIG.apiKey}`,
        {
          email,
          password,
          returnSecureToken: true
        }
      );
  }

  setUser(userId: string){
    this.userId = userId;
  }
  getUser(){
    return this.userId;
  }

  login(email: string, password: string) {

    //firebase login API here
    this.isAuthenticated = true;

    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_CONFIG.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    );
    
  }

  logout() {
    //firebase logout API here
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
  }

}
