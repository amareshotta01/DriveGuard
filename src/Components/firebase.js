import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK0dXg2w1URqbuZScKG-rzd9Ez5rtDPvs",
  authDomain: "driveguard-c0935.firebaseapp.com",
  projectId: "driveguard-c0935",
  storageBucket: "driveguard-c0935.appspot.com",
  messagingSenderId: "202431825842",
  appId: "1:202431825842:web:49d24a8d8174674d4ec6ab",
  measurementId: "G-4LFB340Y21"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};