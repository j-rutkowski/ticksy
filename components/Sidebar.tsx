import ProfilePicture from "./ProfilePicture";
import { useAuth } from "../context/AuthContext";
import { useLists } from "../context/ListsContext";
import PinnedList from "./PinnedList";
import List from "./List";
import MenuButton from "./MenuButton";
import { IconContext } from "react-icons";
import { IoAddCircle, IoExitOutline } from "react-icons/io5";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: () => void;
  setIsModalOpen: () => void;
};

const Sidebar: React.FunctionComponent<Props> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  setIsModalOpen,
}) => {
  const { user, logout } = useAuth();
  const { lists, currentList, setCurrentList } = useLists()!;

  const updateList = (listName: string) => {
    setCurrentList(listName);
    setIsSidebarOpen();
  };

  return (
    <div
      className={`z-10 bg-gray-100 p-4 h-full w-full md:flex flex-col gap-10 md:relative absolute top-0 bottom-0 left-0 right-0 ${
        isSidebarOpen ? "flex" : "hidden"
      }`}
    >
      <MenuButton type='close' setIsSidebarOpen={setIsSidebarOpen} />
      <div className='flex items-center flex-row gap-2 mt-4 ml-4 md:m-0'>
        <ProfilePicture
          letter={user.displayName != null ? user.displayName[0] : "A"}
        />
        <span className='font-medium'>{user.displayName}</span>
      </div>
      <div>
        <div className='grid grid-cols-2 gap-2 items-center justify-items-center'>
          {lists
            .filter((list) => list.isPinned === true)
            .map((list) => (
              <PinnedList
                key={list.name}
                name={list.name}
                color={list.color}
                numberOfItems={list.tasks.length}
                icon={list.icon}
                isActive={currentList === list.name}
                onClick={updateList}
              />
            ))}
        </div>
        <div className='flex flex-col gap-2 py-4 px-3'>
          <span className='text-gray-500 text-xs font-medium'>My lists</span>
          {lists
            .filter((list) => list.isPinned === false)
            .map((list) => (
              <List
                key={list.name}
                name={list.name}
                color={list.color}
                numberOfItems={list.tasks.length}
                icon={list.icon}
                isActive={currentList === list.name}
                onClick={updateList}
              />
            ))}
        </div>
      </div>
      <span
        className={`text-gray-500 font-medium absolute ${
          isSidebarOpen ? "bottom-4 right-6" : "top-5 right-4"
        } hover:cursor-pointer flex flex-row items-center gap-2`}
        onClick={logout}
        title='Logout'
      >
        <IconContext.Provider value={{ color: "dark-gray", size: "1.5rem" }}>
          <IoExitOutline />
        </IconContext.Provider>
      </span>
      <span
        className='text-gray-500 font-medium absolute bottom-4 left-4 hover:cursor-pointer flex flex-row items-center gap-2'
        onClick={setIsModalOpen}
        title='Add a new list'
      >
        Add a new list
        <IconContext.Provider value={{ color: "dark-gray", size: "1.5rem" }}>
          <IoAddCircle />
        </IconContext.Provider>
      </span>
    </div>
  );
};

export default Sidebar;
