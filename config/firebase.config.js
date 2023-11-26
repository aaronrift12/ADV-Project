// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD12hYobcTjBzLpPheiRSJe6MgC6kvIrSU",
  authDomain: "react-firebase-e82a6.firebaseapp.com",
  projectId: "react-firebase-e82a6",
  storageBucket: "react-firebase-e82a6.appspot.com",
  messagingSenderId: "979941231077",
  appId: "1:979941231077:web:659536aa2402c98336470c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});