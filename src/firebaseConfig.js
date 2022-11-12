import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAshLPTuZZxTY4EtwFSoPmiHIGBYyF5DJo",
  authDomain: "blog-92f57.firebaseapp.com",
  projectId: "blog-92f57",
  storageBucket: "blog-92f57.appspot.com",
  messagingSenderId: "1070993830912",
  appId: "1:1070993830912:web:6e631412fcb57dd06514e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);