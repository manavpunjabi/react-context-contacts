import firebase from "firebase/app";
import "firebase/storage";
import {
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MESSAGING_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_PROJECT_ID,
} from "../constants/firebase";

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};
console.log(
  "🚀 ~ file: firebase.js ~ line 20 ~ REACT_APP_FIREBASE_STORAGE_BUCKET",
  REACT_APP_FIREBASE_STORAGE_BUCKET
);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
