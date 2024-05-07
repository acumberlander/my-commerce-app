import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBo-lzqZ0ZEuBND0mUOeBvTHOvrbHG5y20",
  authDomain: "shopyshop-2f681.firebaseapp.com",
  projectId: "shopyshop-2f681",
  storageBucket: "shopyshop-2f681.appspot.com",
  messagingSenderId: "706025276618",
  appId: "1:706025276618:web:c75a5fbb78702b5305e033",
  measurementId: "G-M6CLN8XZX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };