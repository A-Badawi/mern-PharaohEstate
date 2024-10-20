// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-pharaohestate.firebaseapp.com",
  projectId: "mern-pharaohestate",
  storageBucket: "mern-pharaohestate.appspot.com",
  messagingSenderId: "730848686277",
  appId: "1:730848686277:web:c31c84debc2009125c40ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);