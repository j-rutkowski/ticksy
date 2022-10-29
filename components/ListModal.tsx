import React from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import * as ionicons from "react-icons/io5";
import { useLists } from "../context/ListsContext";
import { ListType } from "../types/ListType";
import Checkbox from "./Checkbox";
import SmallButton from "./SmallButton";
import { TaskType } from "../types/TaskType";

type Props = {
  type: "New" | "Edit";
  list: ListType | null;
  setIsModalOpen: () => void;
};

const ListModal: React.FunctionComponent<Props> = ({
  type,
  list,
  setIsModalOpen,
}) => {
  const [name, setName] = useState<string>(list ? list.name : "");
  const [color, setColor] = useState<string>(list ? list.color : "blue");
  const [icon, setIcon] = useState<string>(list ? list.icon : "IoStar");
  const [isPinned, setIsPinned] = useState<boolean>(
    list ? list.isPinned : false
  );
  const tasks: TaskType[] = list ? list.tasks : [];
  const { addList, deleteList, updateList } = useLists()!;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const colors = ["red", "green", "blue", "yellow", "orange", "violet"];

  const icons = [
    "IoStar",
    "IoBookmark",
    "IoAirplane",
    "IoList",
    "IoAlarm",
    "IoAlert",
    "IoArchive",
    "IoBag",
    "IoBasket",
    "IoBeer",
    "IoSchool",
    "IoBicycle",
    "IoBook",
    "IoBriefcase",
    "IoCafe",
    "IoCalendar",
    "IoCar",
    "IoCard",
    "IoCart",
    "IoCash",
    "IoCheckmark",
    "IoCog",
    "IoColorPalette",
    "IoDocuments",
    "IoFastFood",
    "IoFilm",
    "IoFitness",
    "IoFlag",
    "IoFlower",
    "IoFolder",
    "IoFootball",
    "IoGameController",
    "IoGift",
    "IoGlasses",
    "IoGlobe",
    "IoHammer",
    "IoHeart",
    "IoHome",
    "IoHourglass",
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
    }
  };

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='w-96 max-w-[calc(100vw-4rem)] p-8 relative bg-white rounded-xl flex gap-6 flex-col'>
        <button onClick={setIsModalOpen} className='absolute top-4 right-4'>
          <IconContext.Provider value={{ color: "dark-gray", size: "2rem" }}>
            <IoClose />
          </IconContext.Provider>
        </button>
        <h1 className='text-2xl font-semibold'>{type} List</h1>
        <input
          type='text'
          placeholder={"Enter list's name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          className='w-full py-2 px-3 border-[2px] border-black rounded-lg bg-white focus:outline-none'
        />
        <div className='flex gap-2 flex-row justify-between'>
          {colors.map((c) => (
            <div
              key={c}
              className={`w-8 h-8 bg-${c}-500 rounded-full cursor-pointer ${
                c === color ? "border-[2px] border-black shadow-md" : ""
              }`}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
        <Checkbox
          label='Pin the list to the top'
          checked={isPinned}
          onChange={() => setIsPinned(!isPinned)}
        />
        <div className='flex gap-3 w-[calc(96-4rem)] h-[7rem] overflow-y-scroll flex-wrap p-2'>
          {icons.map((i) => {
            const Icon = ionicons[i as keyof typeof ionicons];
            return (
              <div
                key={i}
                className={`w-8 h-8 flex items-center justify-center transition-all rounded-md cursor-pointer ${
                  i === icon ? "shadow-md" : "shadow-none"
                }`}
                onClick={() => setIcon(i)}
              >
                <IconContext.Provider
                  value={{
                    color: "black",
                    size: "1.5em",
                  }}
                >
                  <Icon />
                </IconContext.Provider>
              </div>
            );
          })}
        </div>
        <div className='flex flex-col gap-2'>
          <SmallButton
            name='Save list'
            onClick={() => {
              const listObject: ListType = {
                name: name,
                color: color,
                icon: icon,
                isPinned: isPinned,
                tasks: tasks,
              };
              if (type === "New") {
                addList(listObject);
              } else {
                updateList(list!, listObject);
              }
              setIsModalOpen();
            }}
            color='blue'
          />
          {type === "Edit" &&
            (isDeleteModalOpen ? (
              <div className='flex flex-row gap-2'>
                <SmallButton
                  name='Confirm'
                  onClick={() => {
                    deleteList(list!);
                    setIsModalOpen();
                  }}
                  color='red'
                />
                <SmallButton
                  name='Cancel'
                  onClick={() => setIsDeleteModalOpen(false)}
                  color='gray'
                />
              </div>
            ) : (
              <SmallButton
                name='Delete list'
                onClick={() => setIsDeleteModalOpen(true)}
                color='red'
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListModal;
