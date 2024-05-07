import { Product } from "@/app/models/Product";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";


type UserContext = {
  user: User | null;
  userId: string | null;
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  signOutUser: () => void;
}


const AppContext = createContext<any>([]);

export const AppWrapper = ({children}: {
  children: React.ReactNode
}) => {
  let [cart, setCart] = useState<Product[]>([]);
  return (
    <AppContext.Provider value={{cart, setCart}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}