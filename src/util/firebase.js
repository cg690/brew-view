import firebase from 'firebase';
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfJ5dm3SYHMdhYpr43qCJXAdRMmDFFBzM",
  authDomain: "brew-app-bbf2b.firebaseapp.com",
  databaseURL: "https://brew-app-bbf2b.firebaseio.com",
  projectId: "brew-app-bbf2b",
  storageBucket: "brew-app-bbf2b.appspot.com",
  messagingSenderId: "375087196378",
  appId: "1:375087196378:web:2ab40cdd3040e1503c9de3",
  measurementId: "G-1TSSWT1CS4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;