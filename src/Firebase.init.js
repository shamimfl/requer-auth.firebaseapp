// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Z5OPJaQVlkPJvOO7qGPoZJ0aQeh0tWM",
  authDomain: "practice-requer-auth.firebaseapp.com",
  projectId: "practice-requer-auth",
  storageBucket: "practice-requer-auth.appspot.com",
  messagingSenderId: "740314282779",
  appId: "1:740314282779:web:62b473e7cbbd75713bf1be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth;