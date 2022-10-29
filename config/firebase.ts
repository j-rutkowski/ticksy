import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4HeOrr3MdO9ZcqFVzaVLuOQbMxXMYGGo",
  authDomain: "ticksy-23dfd.firebaseapp.com",
  projectId: "ticksy-23dfd",
  storageBucket: "ticksy-23dfd.appspot.com",
  messagingSenderId: "794472788898",
  appId: "1:794472788898:web:68ea79d8a687ddd548f8fb"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth();
export const db = getFirestore(app);