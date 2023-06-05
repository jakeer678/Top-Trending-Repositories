// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEsHOzZH53v3jpKCBzZrzcjJtwpSrIXgo",
  authDomain: "login-with-github-b5e23.firebaseapp.com",
  projectId: "login-with-github-b5e23",
  storageBucket: "login-with-github-b5e23.appspot.com",
  messagingSenderId: "507105298045",
  appId: "1:507105298045:web:4a24dec0e4809006fbd314",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
