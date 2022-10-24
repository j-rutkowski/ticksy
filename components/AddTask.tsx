import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { TaskType } from "../types/TaskType";
import { IconContext } from "react-icons";
import { IoAdd } from "react-icons/io5";

type AddTaskProps = {
  handleAdd: (task: TaskType) => void;
};

const AddTask: React.FunctionComponent<AddTaskProps> = ({ handleAdd }) => {
  const [taskName, setTaskName] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
    }
  };

  const handleClick = () => {
    if (taskName !== "") {
      const newTask: TaskType = {
        id: uuidv4(),
        name: taskName,
      };
      handleAdd(newTask);
      setTaskName("");
    }
  };

  return (
    <div className="w-96 flex gap-3 items-center">
      <input
        type="text"
        placeholder="Enter task's name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        className="w-full py-2 px-3 border-[2px] border-black rounded-lg bg-white focus:outline-none"
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-[calc(0.5rem+2px)] rounded-lg transition-all px-3"
        onClick={handleClick}
      >
        <IconContext.Provider value={{ color: "white", size: "24px" }}>
          <IoAdd />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default AddTask;
