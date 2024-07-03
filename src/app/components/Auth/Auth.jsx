'use client';


import { useState } from "react";
import './Auth.css';
import { CircularProgress } from "@mui/material";

const Auth = () => {

  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("password!");
  const [loading, setLoading] = useState(false);

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
        {/* <button onClick={() => handleSignIn(email, password)}>Sign in with Email</button> */}
        <div className="spinner-container">
          { loading ? <CircularProgress /> : null }
        </div>
      </div>
    </div>
  )
}

export default Auth