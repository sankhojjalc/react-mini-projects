/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const PaginationContext = createContext();

const initialState = {
  users: [],
  currentPage: 0,
  usersPerPage: 20,
  numberOfPages: 1,
  originalData: [],
};

export const PaginationContextProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  return (
    <PaginationContext.Provider value={{ data, setData }}>
      {children}
    </PaginationContext.Provider>
  );
};
