// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
//import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const config = {

  apiKey: "AIzaSyAt_PxNi6btUwEPET19G4JTAyAcvIzTqeQ",

  authDomain: "ideen-c6864.firebaseapp.com",

  projectId: "ideen-c6864",

  storageBucket: "ideen-c6864.appspot.com",

  messagingSenderId: "277960062240",

  appId: "1:277960062240:web:e88203143f8f5c37bc1345",

  measurementId: "G-BZ11NKNVSD"

};


// Initialize Firebase

firebase.initializeApp(config);
const db = firebase.firestore();


export default db;

