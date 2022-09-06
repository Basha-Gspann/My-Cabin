import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// var firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyCK6E_p5snOPe4V7s3HzGFxxZofylChZM0",
//     authDomain: "form-data-12a4c.firebaseapp.com",
//     projectId: "form-data-12a4c",
//     storageBucket: "form-data-12a4c.appspot.com",
//     messagingSenderId: "169392162905",
//     appId: "1:169392162905:web:94cc2bedef09874b6e0948"
// });

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDjd-BlL4eJ37cVHVOjvzofh37wOEZMadM",
    authDomain: "sample-cabin.firebaseapp.com",
    projectId: "sample-cabin",
    storageBucket: "sample-cabin.appspot.com",
    messagingSenderId: "338895707983",
    appId: "1:338895707983:web:03db604a7b43cb1f6d2f3a"
  });

var db = firebaseApp.firestore();

export { db };