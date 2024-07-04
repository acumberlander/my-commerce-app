'use client';

import { createContext, useContext, useState } from "react";

const SearchContext = createContext(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchContextProvider = ({children}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchContext.Provider>
  )
}

