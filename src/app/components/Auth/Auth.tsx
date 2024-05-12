'use client';

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useState } from "react";
import './Auth.css';
import { useUserContext } from "../UserProvider";
import { CircularProgress } from "@mui/material";

export const listenToAuthChanges = (callback: any) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

const Auth = () => {
  const { setLoggedIn } = useUserContext();

  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("password!");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        console.log(response);
        setLoggedIn(true);
        setLoading(false);
      } else {
        console.log("It didn't work...");
      }
    } catch (error: any) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setLoggedIn(true);
    } catch (error: any) {
      console.error(error.message);
    }
  };


  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h1 className="email-auth-header">Sign in With Email</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        <button onClick={() => handleSignIn(email, password)}>Sign in with Email</button>
        <div className="spinner-container">
          { loading ? <CircularProgress /> : null }
        </div>
      </div>
    </div>
  )
}

export default Auth