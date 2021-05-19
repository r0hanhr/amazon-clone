import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAuOSVHOAn4c9pZWN4q7d7jg0xQT3XCQ4",
  authDomain: "clone-49422.firebaseapp.com",
  projectId: "clone-49422",
  storageBucket: "clone-49422.appspot.com",
  messagingSenderId: "775435531823",
  appId: "1:775435531823:web:4ecf6269f12d818c7ab8da",
  measurementId: "G-HB1KLCTVVL",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
