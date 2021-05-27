import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDP65nl2AzIReWbbnAUcd6D-rB_r1HJi98",
  authDomain: "hci-designproject-35627.firebaseapp.com",
  projectId: "hci-designproject-35627",
  storageBucket: "hci-designproject-35627.appspot.com",
  messagingSenderId: "149336258013",
  appId: "1:149336258013:web:6fc6e970dbbe13bc94f234"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export {db, firebaseApp};

