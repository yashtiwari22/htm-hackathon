import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBM88T44aqkfB2FIG2kR-DHDDm1r9fU350",
  authDomain: "htm-hackathon.firebaseapp.com",
  projectId: "htm-hackathon",
  storageBucket: "htm-hackathon.appspot.com",
  messagingSenderId: "236183640867",
  appId: "1:236183640867:web:b9e3b755ba097f0b80ca96"
});

var db = firebaseApp.firestore();

export { db };