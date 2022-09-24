import React, { createContext, useContext, useState } from "react";
import { ListType } from "../types/ListType";
import { sampleLists } from "../lib/Lists";

type ListContextType = {
  lists: ListType[];
  currentList: string;
  setLists: React.Dispatch<React.SetStateAction<ListType[]>>;
  setCurrentList: React.Dispatch<React.SetStateAction<string>>;
};

const ListsContext = createContext<ListContextType | null>(null);

export const useLists = () => useContext(ListsContext);

export const ListsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lists, setLists] = useState<ListType[]>(sampleLists);
  const [currentList, setCurrentList] = useState<string>(lists[0].name);

  return (
    <ListsContext.Provider
      value={{ lists, setLists, currentList, setCurrentList }}
    >
      {children}
    </ListsContext.Provider>
  );
};
