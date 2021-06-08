import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxWDv9sUH5UvGED3Ru4g2MXNqNKJSTG9w",
  authDomain: "slack-look-a-like.firebaseapp.com",
  projectId: "slack-look-a-like",
  storageBucket: "slack-look-a-like.appspot.com",
  messagingSenderId: "793701118072",
  appId: "1:793701118072:web:5bc1cf46086f668001fd8d",
  measurementId: "G-E2DY853RXV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
