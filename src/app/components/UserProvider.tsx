'use client';

import { Product } from "@/app/models/Product";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { User, signOut } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { listenToAuthChanges } from "./Auth/Auth";

interface UserContextProps {
  user: User | null;
  userId: string | null;
  loggedIn: boolean;
  cart: Product[];
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  setCart: Dispatch<SetStateAction<Product[]>>;
  setUserId: (userId: string | null) => void;
  signOutUser: () => void;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export const GlobalContextProvider = ({children}: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [cart, setCart] = useState<Product[]>([]);

  const signOutUser = () => {
    setLoggedIn(false);
    // signOut(auth);
  };

  // useEffect(() => {
  //   const unsubscribe = listenToAuthChanges((authUser: User | null) => {
  //     if (authUser) {
  //       setUser(authUser);
  //       setUserId(authUser.uid);
  //       setLoggedIn(true);
  //     } else {
  //       setUser(null);
  //       setUserId(null);
  //       setLoggedIn(false);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <UserContext.Provider value={{
      cart,
      setCart,
      user,
      userId,
      loggedIn,
      setLoggedIn,
      setUser,
      setUserId,
      signOutUser
    }}>
      {children}
    </UserContext.Provider>
  )
}
