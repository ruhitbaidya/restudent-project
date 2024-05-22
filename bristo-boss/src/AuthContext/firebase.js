// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYrZ9_svHSq51cdaBJw38aOlztyu2ZR98",
  authDomain: "bristocrudoperation.firebaseapp.com",
  projectId: "bristocrudoperation",
  storageBucket: "bristocrudoperation.appspot.com",
  messagingSenderId: "539524194484",
  appId: "1:539524194484:web:0c8072a9da03cd7ce777e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;