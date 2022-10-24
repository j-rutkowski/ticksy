import { FunctionComponent, useState } from "react";
import { motion, Reorder } from "framer-motion";
import { useLists } from "../context/ListsContext";
import { ListType } from "../types/ListType";
import { IconContext } from "react-icons";
import { IoReorderThree } from "react-icons/io5";
import { TaskType } from "../types/TaskType";

type TaskProps = {
  taskObject: TaskType;
  handleDelete: () => void;
};

const Task: FunctionComponent<TaskProps> = ({ taskObject, handleDelete }) => {
  const { name } = taskObject;
  const { lists, currentList } = useLists()!;
  const [list, setList] = useState<ListType>(
    lists.find((list) => list.name === currentList) as ListType
  );
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
    animate: { opacity: 1 },
  };

  return (
    <Reorder.Item
      value={taskObject}
      onDragStart={() => setIsDragged(true)}
      onDragEnd={() => setIsDragged(false)}
      className={`flex items-center justify-between bg-white w-96 rounded-lg p-2 ${
        isDragged && "shadow-md cursor-grabbing"
      } ${ticked && "pointer-events-none"}`}
      draggable="true"
      initial="hidden"
      animate="animate"
      variants={TaskVariants}
    >
      <label className="flex gap-2 items-center">
        <input
          type="checkbox"
          onChange={handleTick}
          checked={ticked}
          className="hidden-checkbox"
        />
        <motion.div
          className="w-5 h-5 rounded-md border-[2px] border-gray-400 hover:cursor-pointer"
          initial={false}
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
        <IoReorderThree />
      </IconContext.Provider>
    </Reorder.Item>
  );
};

export default Task;
