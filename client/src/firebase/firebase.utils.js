import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDe8zI8WBNouStCsl-x68HGA9h0EzG2VMQ",
  authDomain: "e-commerce-website-99159.firebaseapp.com",
  databaseURL: "https://e-commerce-website-99159.firebaseio.com",
  projectId: "e-commerce-website-99159",
  storageBucket: "e-commerce-website-99159.appspot.com",
  messagingSenderId: "714761802326",
  appId: "1:714761802326:web:7e8329083fb37fed55e1f7",
  measurementId: "G-EHLKC1F2KQ"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
