import React, { createContext, useContext, useEffect, useState } from "react";
import { ListType } from "../types/ListType";
import { updateUserLists, getUserLists } from "../lib/firestore";
import { v4 as uuidv4 } from "uuid";

type ListContextType = {
  lists: ListType[];
  currentList: string;
  updateLists: (newLists: ListType[]) => void;
  setCurrentList: React.Dispatch<React.SetStateAction<string>>;
  addList: (list: ListType) => void;
  deleteList: (oldList: ListType) => void;
  updateList: (oldList: ListType, newList: ListType) => void;
  getLists: () => Promise<void>;
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
      name: "Example",
      icon: "IoStar",
      color: "blue",
      tasks: [
        {
          name: "Your first task!",
          id: uuidv4(),
        },
      ],
      isPinned: true,
    },
    {
      name: "Planned",
      icon: "IoCalendar",
      color: "red",
      tasks: [],
      isPinned: true,
    },
    {
      name: "All",
      icon: "IoList",
      color: "slate",
      tasks: [],
      isPinned: true,
    },
    {
      name: "Important",
      icon: "IoFlag",
      color: "yellow",
      tasks: [],
      isPinned: true,
    },
    {
      name: "School",
      icon: "IoSchool",
      color: "violet",
      tasks: [],
      isPinned: false,
    },
    {
      name: "Groceries",
      icon: "IoCart",
      color: "green",
      tasks: [],
      isPinned: false,
    },
  ]);
  const [currentList, setCurrentList] = useState<string>("Example");

  const updateLists = (newLists: ListType[]) => {
    setLists(newLists);
    if (currentList !== "Example") {
      updateUserLists(newLists);
    }
  };

  const addList = (newList: ListType) => {
    const newLists = [...lists, newList];
    setLists(newLists);
    setCurrentList(newList.name);
    updateUserLists(newLists);
  };

  const deleteList = (oldList: ListType) => {
    const newLists = lists.filter((list) => list.name !== oldList.name);
    setLists(newLists);
    setCurrentList(newLists[0].name);
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

  const getLists = async () => {
    const userLists = await getUserLists();
    if (userLists.length > 0) {
      setLists(userLists);
      setCurrentList(userLists[0].name);
    }
  };

  useEffect(() => {
    getLists();
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
        getLists,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
