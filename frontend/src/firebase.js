// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "newton-electrical.firebaseapp.com",
  projectId: "newton-electrical",
  storageBucket: "newton-electrical.appspot.com",
  messagingSenderId: "840725734416",
  appId: "1:840725734416:web:516842c07ac339e6b31695"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);