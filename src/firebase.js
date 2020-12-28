import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAY046pP1LUdewynBBtq0ZgdDXODSJgzxc",
  authDomain: "react-1b6ef.firebaseapp.com",
  projectId: "react-1b6ef",
  storageBucket: "react-1b6ef.appspot.com",
  messagingSenderId: "605264889595",
  appId: "1:605264889595:web:7fe63a5def33b1a7cf925e",
  measurementId: "G-Q57CXJWJW7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
