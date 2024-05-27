import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface SearchContextProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchContextProvider = ({children}: {children: ReactNode}) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchContext.Provider>
  )
}

