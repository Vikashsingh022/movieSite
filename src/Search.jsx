import React from 'react'
import { createContext, useState } from 'react';

export const SearchContext = createContext();

const Search = ({children}) => {
  let [query, setQuery] = useState("");
  let [fav, setFav] = useState([]);
  
  return (
    <SearchContext.Provider value={{
      q: { query, setQuery },
      f: { fav, setFav }
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export default Search