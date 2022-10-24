import { ListType } from "../types/ListType";
import { v4 as uuidv4 } from "uuid";

export const sampleLists: ListType[] = [
  {
    name: "Today",
    icon: "IoStar",
    color: "blue",
    tasks: [
      {
        name: "Buy milk",
        id: uuidv4()
      },
      {
        name: "Buy eggs",
        id: uuidv4()
      }
    ],
    isPinned: true,
  },
  {
    name: "Planned",
    icon: "IoCalendar",
    color: "red",
    tasks: [
      {
        name: "Buy milk",
        id: uuidv4()
      },
      {
        name: "Buy eggs",
        id: uuidv4()
      },
      {
        name: "Buy bread",
        id: uuidv4()
      }
    ],
    isPinned: true,
  },  
  {
    name: "All",
    icon: "IoList",
    color: "slate",
    tasks: [
      {
        name: "Buy milk",
        id: uuidv4()
      },
    ],
    isPinned: true,
  },  
  {
    name: "Important",
    icon: "IoFlag",
    color: "yellow",
    tasks: [
      {
        name: "Buy milk",
        id: uuidv4()
      },
      {
        name: "Buy eggs",
        id: uuidv4()
      },
      {
        name: "Buy bread",
        id: uuidv4()
      },
      {
        name: "Buy cheese",
        id: uuidv4()
      }
    ],
    isPinned: true,
  },
  {
    name: "School",
    icon: "IoSchool",
    color: "violet",
    tasks: [
      {
        name: "Buy milk",
        id: uuidv4()
      },
      {
        name: "Buy eggs",
        id: uuidv4()
      },
    ],
    isPinned: false,
  },
  {
    name: "Groceries",
    icon: "IoCart",
    color: "green",
    tasks: [
      {
        name: "Buy milk",
        id: uuidv4()
      },
      {
        name: "Buy broccoli",
        id: uuidv4()
      },
    ],
    isPinned: false,
  },    
];
