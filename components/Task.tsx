import { FunctionComponent, useState } from "react";
import { motion, Reorder } from "framer-motion";
import { IconContext } from "react-icons";
import { IoReorderTwo } from "react-icons/io5";
import { TaskType } from "../types/TaskType";

type TaskProps = {
  taskObject: TaskType;
  handleDelete: () => void;
};

const Task: FunctionComponent<TaskProps> = ({ taskObject, handleDelete }) => {
  const { name } = taskObject;

  const [ticked, setTicked] = useState(false);
  const [isDragged, setIsDragged] = useState(false);

  const handleTick = () => {
    setTicked(!ticked);
    handleDelete();
  };

  const boxVariants = {
    pressed: { scale: 0.65 },
  };

  const checkVariants = {
    checked: { pathLength: 1, opacity: 1 },
    unChecked: { pathLength: 0, opacity: 0 },
  };

  const TaskVariants = {
    hidden: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2, delay: 0.4 } },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <Reorder.Item
      value={taskObject}
      onDragStart={() => setIsDragged(true)}
      onDragEnd={() => setIsDragged(false)}
      className={`flex items-center justify-between bg-white w-96 max-w-[calc(100vw-4rem)] rounded-lg p-2 ${
        isDragged && "shadow-md cursor-grabbing"
      } ${ticked && "pointer-events-none"}`}
      draggable='true'
      initial='hidden'
      animate='animate'
      exit='exit'
      variants={TaskVariants}
    >
      <label className='flex gap-2 items-center'>
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
      </label>
      <IconContext.Provider
        value={{
          size: "1.5em",
          color: "gray",
          className: "hover:cursor-grab",
        }}
      >
        <IoReorderTwo />
      </IconContext.Provider>
    </Reorder.Item>
  );
};

export default Task;
