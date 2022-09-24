import { ListType } from "../types/ListType";

export const sampleLists: ListType[] = [
  {
    name: "Today",
    icon: "IoStar",
    color: "blue",
    tasks: [
      {
        name: "Buy milk",
        ticked: false,
      },
      {
        name: "Buy eggs",
        ticked: false,
      }
    ],
    isPinned: true,
  },
  {
    name: "Important",
    icon: "IoFlag",
    color: "red",
    tasks: [
      {
        name: "Buy milk",
        ticked: false,
      },
      {
        name: "Buy eggs",
        ticked: false,
      },
      {
        name: "Buy bread",
        ticked: false,
      }
    ],
    isPinned: true,
  },  
  {
    name: "All",
    icon: "IoList",
    color: "green",
    tasks: [
      {
        name: "Buy milk",
        ticked: false,
      },
    ],
    isPinned: true,
  },  
  {
    name: "Planned",
    icon: "IoCalendar",
    color: "yellow",
    tasks: [
      {
        name: "Buy milk",
        ticked: false,
      },
      {
        name: "Buy eggs",
        ticked: false,
      },
      {
        name: "Buy bread",
        ticked: false,
      },
      {
        name: "Buy cheese",
        ticked: false,
      }
    ],
    isPinned: true,
  },  
];
