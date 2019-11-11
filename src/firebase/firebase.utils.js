import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDe8zI8WBNouStCsl-x68HGA9h0EzG2VMQ",
    authDomain: "e-commerce-website-99159.firebaseapp.com",
    databaseURL: "https://e-commerce-website-99159.firebaseio.com",
    projectId: "e-commerce-website-99159",
    storageBucket: "e-commerce-website-99159.appspot.com",
    messagingSenderId: "714761802326",
    appId: "1:714761802326:web:7e8329083fb37fed55e1f7",
    measurementId: "G-EHLKC1F2KQ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;