import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsJ0ETvr-Snv5hiYFTHXXZ5eI8EJgPVDo",
  authDomain: "beer-shop-645d2.firebaseapp.com",
  projectId: "beer-shop-645d2",
  storageBucket: "beer-shop-645d2.appspot.com",
  messagingSenderId: "525712788181",
  appId: "1:525712788181:web:cd36e4a0a05ea3ef32f05c",
  measurementId: "G-LPQM10ZVZJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
