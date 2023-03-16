// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYKhWn5rvgKeRbTMVnHokZjpgKPxiBDCQ",
  authDomain: "ikiz-973f8.firebaseapp.com",
  projectId: "ikiz-973f8",
  storageBucket: "ikiz-973f8.appspot.com",
  messagingSenderId: "881712059084",
  appId: "1:881712059084:web:aff410bd00da4001952869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage_bucket = getStorage(app);