import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwzHIQ9kuY58WY5VioPom0CIsojEtVAV8",
    authDomain: "omni-5c66b.firebaseapp.com",
    databaseURL: "https://omni-5c66b.firebaseio.com",
    projectId: "omni-5c66b",
    storageBucket: "omni-5c66b.appspot.com",
    messagingSenderId: "126891557438",
    appId: "1:126891557438:web:2eb8979dae80ec78b0876f",
    measurementId: "G-3KQN51RX8Z"
  };

// Avvio Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}


export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();