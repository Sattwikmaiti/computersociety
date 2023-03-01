// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv2BU7B1BW_PCWbxZ_MMsoQ6SopKJyHxw",
  authDomain: "csssociety-3eb03.firebaseapp.com",
  projectId: "csssociety-3eb03",
  storageBucket: "csssociety-3eb03.appspot.com",
  messagingSenderId: "645108612619",
  appId: "1:645108612619:web:e8f62f505551b5e4bf110e",
  measurementId: "G-0RJ74YMQVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app)
const provider=new GoogleAuthProvider();
    export {auth ,provider}