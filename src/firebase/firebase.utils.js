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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
