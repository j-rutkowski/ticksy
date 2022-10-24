import Task from "./Task";
import { useLists } from "../context/ListsContext";
import { ListType } from "../types/ListType";
import { TaskType } from "../types/TaskType";
import { Reorder } from "framer-motion";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    updateTasks();
    updateList();
  }, [currentList]);

  const TaskVariants = {
    hidden: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="grid w-full h-full grid-rows-[10%_90%] p-8">
      <h3 className={`text-3xl font-bold text-${list.color}-500`}>
        {currentList}
      </h3>
      <Reorder.Group
        values={tasks}
        onReorder={setTasks}
        axis="y"
        className="flex flex-col px-2 items-start"
        initial="hidden"
        animate="animate"
        variants={TaskVariants}
      >
        {tasks.map((task) => (
          <Task key={list.name + task.name} taskObject={task} />
        ))}
      </Reorder.Group>
    </div>
  );
};

export default SelectedList;
