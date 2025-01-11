// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwgwh7Xvu0wUb3sbhTNEt3AXhkyzzbGy0",
  authDomain: "module-51-f107a.firebaseapp.com",
  projectId: "module-51-f107a",
  storageBucket: "module-51-f107a.firebasestorage.app",
  messagingSenderId: "81804630505",
  appId: "1:81804630505:web:ae97edf9baeec3ad8b9378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);