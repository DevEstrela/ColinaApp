/*
  IMPORTANDO O BANCO DE DADOS FIREBASE
*/

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA82pDGVNhviBSe2FxTLtj5va5XrGHoZKU",
  authDomain: "logincolina.firebaseapp.com",
  databaseURL: "https://logincolina-default-rtdb.firebaseio.com",
  projectId: "logincolina",
  storageBucket: "logincolina.appspot.com",
  messagingSenderId: "647735818982",
  appId: "1:647735818982:web:64e5885f8a42eafa6d9927",
  measurementId: "G-VG2BK3D4VH"
};

if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig);

}  
  export default firebase;