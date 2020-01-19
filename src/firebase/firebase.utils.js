import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAHbhUV8cP0XuMcuIwJGLmv6lZAt3kdTZE',
  authDomain: 'crwn-db-53dd0.firebaseapp.com',
  databaseURL: 'https://crwn-db-53dd0.firebaseio.com',
  projectId: 'crwn-db-53dd0',
  storageBucket: 'crwn-db-53dd0.appspot.com',
  messagingSenderId: '533607516552',
  appId: '1:533607516552:web:fd0840c914225dde5d923d',
  measurementId: 'G-XP9R1VS475',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exits) {
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
