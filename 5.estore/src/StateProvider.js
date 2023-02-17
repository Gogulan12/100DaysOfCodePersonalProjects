import React, { createContext, useContext, useReducer } from "react";

// prepares the data layer
export const StateContext = createContext();

//  wrap our app and provide data layer with the data

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
