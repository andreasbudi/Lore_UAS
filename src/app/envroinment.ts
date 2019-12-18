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

  export const snapShotToArray = snapshot =>{
      let returnArray = [];
      snapshot.forEach(element => {
          let item = element.val();
          item.key = element.key;
          returnArray.push(item);
      });
      return returnArray;
  }