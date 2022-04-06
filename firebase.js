import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVrKzdjBXCKHrkEnQxTtUSHG5BRqRkon4",
    authDomain: "signal-clone-26c96.firebaseapp.com",
    projectId: "signal-clone-26c96",
    storageBucket: "signal-clone-26c96.appspot.com",
    messagingSenderId: "716568239541",
    appId: "1:716568239541:web:e01394c0f997f4b18a0dfc"
};

const firebaseApp = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
