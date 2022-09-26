import ProfilePicture from "./ProfilePicture";
import { useAuth } from "../context/AuthContext";
import { useLists } from "../context/ListsContext";
import PinnedList from "./PinnedList";
import List from "./List";

const Sidebar: React.FunctionComponent = () => {
  const { user, logout } = useAuth();
  const { lists, setLists, currentList, setCurrentList } = useLists()!;

  return (
    <div className="bg-gray-100 p-4 h-full w-full flex flex-col gap-10">
      <div
        className="flex items-center flex-row gap-2 hover:cursor-pointer"
        onClick={logout}
      >
        <ProfilePicture letter={user.displayName[0]} />
        <span className="font-medium">{user.displayName}</span>
      </div>
      <div>
        <div className="grid grid-rows-2 grid-cols-2 gap-2 items-center justify-items-center">
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
                onClick={setCurrentList}
              />
            ))}
        </div>
        <div className="flex flex-col gap-2 py-4 px-3">
          <span className="text-gray-500 text-xs font-medium">My lists</span>
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
                onClick={setCurrentList}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
