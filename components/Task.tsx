import { FunctionComponent, useState, useEffect } from "react";
import { motion, Reorder, useMotionValue } from "framer-motion";
import { useLists } from "../context/ListsContext";
import { ListType } from "../types/ListType";
import { IconContext } from "react-icons";
import { IoReorderThree } from "react-icons/io5";

type TaskProps = {
  name: string;
};

const Task: FunctionComponent<TaskProps> = ({ name }) => {
  const { lists, currentList } = useLists()!;
  const [list, setList] = useState<ListType>(
    lists.find((list) => list.name === currentList) as ListType
  );
  const [ticked, setTicked] = useState(false);

  const handleTick = () => {
    if (list) {
      // const newTasks = list.tasks.filter((task) => task.name !== name);
      setTicked(!ticked);
      const newTasks = list.tasks.map((task) => {
        if (task.name === name) {
          return { ...task, ticked: !task.ticked };
        }
        return task;
      });
      setList({ ...list, tasks: newTasks });
    }
  };

  const boxVariants = {
    pressed: { scale: 0.65 },
  };

  const checkVariants = {
    checked: { pathLength: 1, opacity: 1 },
    unChecked: { pathLength: 0, opacity: 0 },
  };

  return (
    <label className='flex items-center justify-between w-96'>
      <div className='flex gap-2 items-center'>
        <input
          type='checkbox'
          onChange={handleTick}
          checked={ticked}
          className='hidden-checkbox'
        />
        <motion.div
          className='w-5 h-5 rounded-md border-[2px] border-gray-400 hover:cursor-pointer'
          initial={false}
          whileTap='pressed'
          variants={boxVariants}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <motion.path
              fill='none'
              stroke='black'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='64'
              d='M416 128L192 384l-96-96'
              initial={false}
              animate={ticked ? "checked" : "unChecked"}
              variants={checkVariants}
            />
          </svg>
        </motion.div>
        <span
          className={`select-none ${ticked && "line-through text-gray-400"}`}
        >
          {name}
        </span>
      </div>
      <IconContext.Provider value={{ color: "gray" }}>
        <IoReorderThree />
      </IconContext.Provider>
    </label>
  );
};

export default Task;
