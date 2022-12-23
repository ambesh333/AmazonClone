import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAD81hV5Gw6nRkVp30NOH2PafJStY8alCw",
    authDomain: "clone-79e3b.firebaseapp.com",
    projectId: "clone-79e3b",
    storageBucket: "clone-79e3b.appspot.com",
    messagingSenderId: "425273325115",
    appId: "1:425273325115:web:33f35439471fdcf0a2ce1e",
    measurementId: "G-MYNBM6MNJT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };