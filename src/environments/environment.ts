// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCCljPsrOdqBTx2fMTrnwsb0TMPEyJKys4",
  authDomain: "lore-93517.firebaseapp.com",
  databaseURL: "https://lore-93517.firebaseio.com",
  projectId: "lore-93517",
  storageBucket: "lore-93517.appspot.com",
  messagingSenderId: "1052217568726",
  appId: "1:1052217568726:web:9cee17c5af0385562a0877",
  measurementId: "G-83T712NF3H"
};

export const environment = {
  production: false,
  mapsAPIKey: "AIzaSyBz8mH4PjNWtelIa_7Izn1xDaD4_tDiYXU"
}

export const snapshotToArray = snapshot => {
  let returnArray = [];
  snapshot.forEach(element => {
    let item = element.val();
    item.key = element.key;
    returnArray.push(item);
  });
  return returnArray;
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
