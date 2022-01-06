import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5nSUB2NaQwdz6gquzs_p_8GjU0Hlrl-w",
  authDomain: "minecrafttournamentdata.firebaseapp.com",
  databaseURL: "https://minecrafttournamentdata-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "minecrafttournamentdata",
  storageBucket: "minecrafttournamentdata.appspot.com",
  messagingSenderId: "625776768085",
  appId: "1:625776768085:web:7a33018033a0bb3146d0dc",
  measurementId: "G-RE3N60FV50"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export { db, firebase };