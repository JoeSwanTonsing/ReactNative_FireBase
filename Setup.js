import React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyC6AmHdLDFKFhmleYtMess-vrUn0r0W9XM',
  authDomain: 'reactnative-firebase-297118.firebaseapp.com',
  databaseURL: 'https://reactnative-firebase-297118.firebaseio.com',
  projectId: 'reactnative-firebase-297118',
  storageBucket: 'reactnative-firebase-297118.appspot.com',
  messagingSenderId: '305131142398',
  appId: '1:305131142398:web:c37cd0f423fd224281f9af',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Setup() {
  return <App />;
}

export {firebase, auth, database, firestore};
export default Setup;
