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

import { useUser } from "../UserProvider";
// import router from "next/router";

export const listenToAuthChanges = (callback: any) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

const Auth = () => {
  const { setLoggedIn } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
    } catch (error: any) {
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
    <div>
      <input 
        type="email" 
        placeholder="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={()=> handleSignIn(email, password)}>Sign in with Email</button>
    </div>
  )
}

export default Auth