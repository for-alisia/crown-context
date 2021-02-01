/** Libraries */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAybGvMH8LydWC5yUFXjSHUiI8wQvqwacQ',
  authDomain: 'crown-be1fc.firebaseapp.com',
  databaseURL: 'https://crown-be1fc-default-rtdb.firebaseio.com',
  projectId: 'crown-be1fc',
  storageBucket: 'crown-be1fc.appspot.com',
  messagingSenderId: '1075600125483',
  appId: '1:1075600125483:web:1ea961ba86c659da12046e',
};

firebase.initializeApp(config);

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
        ...additionalData,
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
