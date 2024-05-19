// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmVce8ylkqrAWXr3XuczzJOrZZiSvnimw",
  authDomain: "traveller--a-react-native-app.firebaseapp.com",
  projectId: "traveller--a-react-native-app",
  storageBucket: "traveller--a-react-native-app.appspot.com",
  messagingSenderId: "358074572434",
  appId: "1:358074572434:web:16d65eec3d7fa1f4ce904b"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

