import Task from "./Task";
import { useLists } from "../context/ListsContext";
import { ListType } from "../types/ListType";
import { TaskType } from "../types/TaskType";
import { AnimatePresence, Reorder } from "framer-motion";
import { useState, useEffect } from "react";
import AddTask from "./AddTask";

const SelectedList: React.FunctionComponent = () => {
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
    const newTasks = tasks.filter((t) => t.name !== taskName);
    setTimeout(() => {
      setTasks(newTasks);
    }, 1000);
  };

  const handleAdd = (task: TaskType) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  useEffect(() => {
    updateTasks();
    updateList();
  }, [currentList]);

  return (
    <div className="grid w-full h-full grid-rows-[10%_80%_10%] p-8">
      <h3 className={`text-3xl font-bold text-${list.color}-500`}>
        {currentList}
      </h3>
      <Reorder.Group
        values={tasks}
        onReorder={setTasks}
        axis="y"
        className="flex flex-col px-2 items-start"
      >
        {tasks.map((task) => (
          <Task
            key={task.id}
            taskObject={task}
            handleDelete={() => handleDelete(task.name)}
          />
        ))}
      </Reorder.Group>

      <AddTask handleAdd={handleAdd} />
    </div>
  );
};

export default SelectedList;
