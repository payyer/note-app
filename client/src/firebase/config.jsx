// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQGEebP2lLh8VHdCGxZE-KLgVGuOfG5ns",
  authDomain: "note-app-a9b14.firebaseapp.com",
  projectId: "note-app-a9b14",
  storageBucket: "note-app-a9b14.appspot.com",
  messagingSenderId: "93585359983",
  appId: "1:93585359983:web:4214370276da09fa77f99a",
  measurementId: "G-H16XEEG419",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
