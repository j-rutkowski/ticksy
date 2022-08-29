import Image from "next/future/image";
import profilePicture from "../public/profile.jpg";
import { FunctionComponent, useState } from "react";
import PinnedList from "./PinnedList";
import { lists } from "../lib/Lists";
import List from "./List";
import Checkbox from "./Checkbox";
import { useAuth } from "../context/AuthContext";

const App: FunctionComponent = () => {
  const { user, logout } = useAuth();

  // Curent section's name
  const [currentSection, setCurrentSection] = useState("Today");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-[auto_1fr] w-screen h-screen">
        <div className="bg-gray-100 p-4 h-full w-full flex flex-col gap-10">
          <div
            className="flex items-center flex-row gap-2 hover:cursor-pointer"
            onClick={logout}
          >
            <Image src={profilePicture} className="h-9 w-9 rounded-full" />
            <span className="font-medium">Emily Jacobs</span>
          </div>
          <div>
            <div className="grid grid-rows-2 grid-cols-2 gap-2 items-center justify-items-center">
              {lists.map((list) => (
                <PinnedList
                  key={list.name}
                  name={list.name}
                  color={list.color}
                  numberOfItems={list.numberOfItems}
                  icon={list.icon}
                  isActive={currentSection === list.name}
                  onClick={setCurrentSection}
                />
              ))}
            </div>
            <div className="flex flex-col gap-3 p-4">
              <span className="text-gray-500 text-xs font-medium">
                My lists
              </span>
              {lists.map((list) => (
                <List
                  key={list.name}
                  name={list.name}
                  color={list.color}
                  numberOfItems={list.numberOfItems}
                  icon={list.icon}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid w-full h-full grid-rows-[10%_90%] p-8">
          <h3 className="text-3xl font-bold">{currentSection}</h3>
          <div className="flex flex-col gap-3 px-2 items-start">
            <Checkbox
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              name="New Task"
            />
            <Checkbox
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              name="Clean the house"
            />
            <Checkbox
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              name="Water the plants"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
