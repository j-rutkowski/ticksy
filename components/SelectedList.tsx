import Task from "./Task";
import { useLists } from "../context/ListsContext";
import { ListType } from "../types/ListType";
import { TaskType } from "../types/TaskType";
import { AnimatePresence, Reorder } from "framer-motion";
import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import MenuButton from "./MenuButton";
import { IconContext } from "react-icons";
import { IoEllipsisVertical } from "react-icons/io5";

type Props = {
  setIsSidebarOpen: () => void;
};

const SelectedList: React.FunctionComponent<Props> = ({ setIsSidebarOpen }) => {
  const { lists, setLists, currentList } = useLists()!;
  const [list, setList] = useState<ListType>(
    lists.find((list) => list.name === currentList) as ListType
  );
  const [tasks, setTasks] = useState<TaskType[]>(list.tasks);

  const updateTasks = () => {
    const newList = { ...list, tasks: tasks };
    const newLists = lists.map((list) => {
      if (list.name === newList.name) {
        return newList;
      }
      return list;
    });
    setLists(newLists);
  };

  const updateList = () => {
    const newList = lists.find((list) => list.name === currentList) as ListType;
    setList(newList);
    setTasks(newList.tasks);
  };

  const handleDelete = (taskName: string) => {
    setTimeout(() => {
      setTasks((tasks) => tasks.filter((t) => t.name !== taskName));
    }, 600);
  };

  const handleAdd = (task: TaskType) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  useEffect(() => {
    updateTasks();
  }, [tasks]);

  useEffect(() => {
    updateList();
  }, [currentList]);

  return (
    <div className='grid w-full h-full grid-rows-[2.5rem_5rem_1fr] p-8 relative'>
      <MenuButton type='open' setIsSidebarOpen={setIsSidebarOpen} />
      <div className='flex flex-row items-center gap-1'>
        <h3 className={`text-3xl font-bold text-${list.color}-500`}>
          {currentList}
        </h3>
        <IconContext.Provider
          value={{
            color: "gray",
            className:
              "hover:brightness-125 hover:cursor-pointer transition-all duration-200 mt-1",
            size: "1.2rem",
          }}
        >
          <IoEllipsisVertical />
        </IconContext.Provider>
      </div>
      <AddTask handleAdd={handleAdd} />

      <Reorder.Group
        values={tasks}
        onReorder={setTasks}
        axis='y'
        className='flex flex-col items-start'
      >
        <AnimatePresence>
          {tasks.map((task) => (
            <Task
              key={task.id}
              taskObject={task}
              handleDelete={() => handleDelete(task.name)}
            />
          ))}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

export default SelectedList;
