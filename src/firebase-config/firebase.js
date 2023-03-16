// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv6sdXTF5ApbPEYumqQtOsRl7pkqNn-xc",
  authDomain: "ikizcurtain-main.firebaseapp.com",
  projectId: "ikizcurtain-main",
  storageBucket: "ikizcurtain-main.appspot.com",
  messagingSenderId: "711956907162",
  appId: "1:711956907162:web:ba27e74e45298966930b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);