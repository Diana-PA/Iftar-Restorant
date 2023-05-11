// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLccNNwdPoQkEtnMaIQdN-IidPRD0H5U8",
  authDomain: "restorant-4.firebaseapp.com",
  projectId: "restorant-4",
  storageBucket: "restorant-4.appspot.com",
  messagingSenderId: "466882008877",
  appId: "1:466882008877:web:27684a1fb8e8f4930225a4"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const auth = getAuth(appFirebase);
export const db = getFirestore(appFirebase);

//-------
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
  //apiKey: "AIzaSyDLccNNwdPoQkEtnMaIQdN-IidPRD0H5U8",
  //authDomain: "restorant-4.firebaseapp.com",
  //projectId: "restorant-4",
  //storageBucket: "restorant-4.appspot.com",
  //messagingSenderId: "466882008877",
  //appId: "1:466882008877:web:27684a1fb8e8f4930225a4"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);