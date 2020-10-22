import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwR3iqffmA2H6WxAVgeJ2_zl_jxuIrOaA",
  authDomain: "insta-clone-web.firebaseapp.com",
  databaseURL: "https://insta-clone-web.firebaseio.com",
  projectId: "insta-clone-web",
  storageBucket: "insta-clone-web.appspot.com",
  messagingSenderId: "1065278284537",
  appId: "1:1065278284537:web:e13f89759cc17dc058f828",
  measurementId: "G-P9BFN9N6YL",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
