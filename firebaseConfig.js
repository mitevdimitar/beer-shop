// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsJ0ETvr-Snv5hiYFTHXXZ5eI8EJgPVDo",
  authDomain: "beer-shop-645d2.firebaseapp.com",
  projectId: "beer-shop-645d2",
  storageBucket: "beer-shop-645d2.appspot.com",
  messagingSenderId: "525712788181",
  appId: "1:525712788181:web:cd36e4a0a05ea3ef32f05c",
  measurementId: "G-LPQM10ZVZJ",
};
ßSß;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
