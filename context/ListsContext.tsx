import React, { createContext, useContext, useEffect, useState } from "react";
import { ListType } from "../types/ListType";
import { updateUserLists, getUserLists } from "../lib/firestore";
import { sampleLists } from "../lib/Lists";

type ListContextType = {
  lists: ListType[];
  currentList: string;
  updateLists: (newLists: ListType[]) => void;
  setCurrentList: React.Dispatch<React.SetStateAction<string>>;
  addList: (list: ListType) => void;
  deleteList: (oldList: ListType) => void;
  updateList: (oldList: ListType, newList: ListType) => void;
};

const ListsContext = createContext<ListContextType | null>(null);

export const useLists = () => useContext(ListsContext);

export const ListsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lists, setLists] = useState<ListType[]>([
    {
      name: "Loading...",
      icon: "IoStar",
      color: "blue",
      tasks: [],
      isPinned: false,
    },
  ]);
  const [currentList, setCurrentList] = useState<string>("Loading...");

  const updateLists = (newLists: ListType[]) => {
    setLists(newLists);
    if (currentList !== "Loading...") {
      updateUserLists(newLists);
    }
  };

  const addList = (newList: ListType) => {
    const newLists = [...lists, newList];
    setLists(newLists);
    updateUserLists(newLists);
  };

  const deleteList = (oldList: ListType) => {
    const newLists = lists.filter((list) => list.name !== oldList.name);
    setLists(newLists);
    updateUserLists(newLists);
  };

  const updateList = (oldList: ListType, newList: ListType) => {
    const newLists = lists.map((list) => {
      if (list.name === oldList.name) {
        return newList;
      }
      return list;
    });
    setLists(newLists);
    setCurrentList(newList.name);
    updateUserLists(newLists);
  };

  useEffect(() => {
    getUserLists().then((lists) => {
      console.log(lists);
      setLists(lists);
      setCurrentList(lists[0].name);
    });
  }, []);

  return (
    <ListsContext.Provider
      value={{
        lists,
        updateLists,
        currentList,
        setCurrentList,
        addList,
        deleteList,
        updateList,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
