import React, { useState, createContext } from "react";

export const SeasonContext = createContext();
export const SeasonContextProvidor = (props) => {
  const [games, setGames] = useState([]);

  return (
    <SeasonContext.Provider value={{ games, setGames }}>
      {props.children}
    </SeasonContext.Provider>
  );
};
