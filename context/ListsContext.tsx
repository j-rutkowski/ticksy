import React, { createContext, useContext, useEffect, useState } from "react";
import { List } from "../types/ListType";

const ListsContext = createContext({});

export const useLists = () => useContext(ListsContext);

export const ListsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lists, setLists] = useState<List[]>([]);

  return (
    <ListsContext.Provider value={{ lists, setLists }}>
      {children}
    </ListsContext.Provider>
  );
};
