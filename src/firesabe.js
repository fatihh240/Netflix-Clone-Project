import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDTnab3d5UUxrm0XQYrD0DXgx9lBxRrztc",
    authDomain: "netflix-clone-fatih.firebaseapp.com",
    projectId: "netflix-clone-fatih",
    storageBucket: "netflix-clone-fatih.appspot.com",
    messagingSenderId: "1086124420341",
    appId: "1:1086124420341:web:722e440be046dee763a9bc",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };