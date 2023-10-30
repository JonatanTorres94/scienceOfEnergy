// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import PushNotification from "react-native-push-notification";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApShDEigGdKGDqj7Nbum8cx_f9n8UAbDA",
  authDomain: "cienciadelenergismo-bd5aa.firebaseapp.com",
  projectId: "cienciadelenergismo-bd5aa",
  storageBucket: "cienciadelenergismo-bd5aa.appspot.com",
  messagingSenderId: "919555042852",
  appId: "1:919555042852:web:35cfbca160ad7a343872b1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebase_auth = getAuth(app)

export { app, firebase_auth, firebaseConfig };

