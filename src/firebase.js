import firebase from "firebase";
var firebaseapp=firebase.initializeApp({

  apiKey: "AIzaSyAuYDoWJo9R6P7_iVv7MoRjI04-ELzYEE0",
  authDomain: "react-contactform-47120.firebaseapp.com",
  projectId: "react-contactform-47120",
  storageBucket: "react-contactform-47120.appspot.com",
  messagingSenderId: "16235007936",
  appId: "1:16235007936:web:b564392bc903db1052c225"
});
var db=firebaseapp.firestore();
export {db};