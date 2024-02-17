
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth} from "firebase/auth"
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnqiU6u6z4ksN4ekZKrk811sTuIie5r5E",
  authDomain: "social-media-faf4e.firebaseapp.com",
  projectId: "social-media-faf4e",
  storageBucket: "social-media-faf4e.appspot.com",
  messagingSenderId: "431132346542",
  appId: "1:431132346542:web:f9840926cca99c0392453f",
  measurementId: "G-P6MFXHQDNG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()