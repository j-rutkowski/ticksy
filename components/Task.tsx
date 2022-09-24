import { FunctionComponent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLists } from "../context/ListsContext";
import { ListType } from "../types/ListType";

type TaskProps = {
  name: string;
};

const Task: FunctionComponent<TaskProps> = ({ name }) => {
  const { lists, currentList } = useLists()!;
  const [list, setList] = useState<ListType | null>(null);

  useEffect(() => {
    if (currentList) {
      setList(lists.find((list) => list.name === currentList)!);
    }
  }, [currentList]);

  const handleCheck = () => {
    if (list) {
      const newTasks = list.tasks.filter((task) => task.name !== name);
      setList({ ...list, tasks: newTasks });
    }
  };

  const boxVariants = {
    hover: { scale: 1.05 },
    pressed: { scale: 0.85 },
  };

  const checkVariants = {
    checked: { pathLength: 1, opacity: 1 },
    unChecked: { pathLength: 0, opacity: 0 },
  };

  return (
    <label className="flex gap-2 items-center">
      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
        className="hidden-checkbox"
      />
      <motion.div
        className="w-5 h-5 rounded-md border-[2px] border-gray-400 hover:cursor-pointer"
        initial={false}
        whileHover="hover"
        whileTap="pressed"
        variants={boxVariants}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <motion.path
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="64"
            d="M416 128L192 384l-96-96"
            initial={false}
            animate={isChecked ? "checked" : "unChecked"}
            variants={checkVariants}
          />
        </svg>
      </motion.div>
      <span
        className={`select-none ${isChecked && "line-through text-gray-400"}`}
      >
        {name}
      </span>
    </label>
  );
};

export default Task;
