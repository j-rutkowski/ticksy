import { IoCalendar, IoStar, IoFlag, IoList } from "react-icons/io5";

type List = {
  id: number;
  name: string;
  color: string;
  numberOfItems: number;
  icon: React.ReactElement;
  isActive: boolean;
};

export const lists: List[] = [
  {
    id: 1,
    name: "Today",
    color: "blue",
    numberOfItems: 3,
    icon: <IoStar />,
    isActive: true,
  },
  {
    id: 2,
    name: "Important",
    color: "red",
    numberOfItems: 5,
    icon: <IoFlag />,
    isActive: false,
  },
  {
    id: 3,
    name: "All",
    color: "green",
    numberOfItems: 4,
    icon: <IoList />,
    isActive: false,
  },
  {
    id: 4,
    name: "Planned",
    color: "yellow",
    numberOfItems: 2,
    icon: <IoCalendar />,
    isActive: false,
  },
];
