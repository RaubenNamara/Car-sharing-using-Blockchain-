import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBlsY0v-X3RHsJgh8OcdNz3KftyRUxTdcg",
  authDomain: "mobileapp-6073a.firebaseapp.com",
  projectId: "mobileapp-6073a",
  storageBucket: "mobileapp-6073a.appspot.com",
  messagingSenderId: "426245927113",
  appId: "1:426245927113:web:185ac5034cc88678991d18",
  measurementId: "G-XC9V9YLEYY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = app.auth();
export const firestore = app.firestore();
export const database = app.database();

// Function to get the initialized Firebase instance
const getFirebase = () => {
  return app;
};

export { getFirebase };
