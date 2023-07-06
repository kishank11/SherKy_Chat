// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmLrlpib-Sv3fmvt0e30L5u5iFlaAEnpI",
  authDomain: "chat-c0855.firebaseapp.com",
  projectId: "chat-c0855",
  storageBucket: "chat-c0855.appspot.com",
  messagingSenderId: "1032958645217",
  appId: "1:1032958645217:web:61bdbca16c38b5e30f38a0",
  measurementId: "G-BX83X637TQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const storage = getStorage();
export const db = getFirestore()