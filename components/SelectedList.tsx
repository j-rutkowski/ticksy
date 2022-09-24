import Task from "./Task";
import { useLists } from "../context/ListsContext";

type SelectedListProps = {
  currentList: string;
};

const SelectedList: React.FunctionComponent<SelectedListProps> = ({
  currentList,
}) => {
  const { lists } = useLists()!;

  return (
    <div className="grid w-full h-full grid-rows-[10%_90%] p-8">
      <h3 className="text-3xl font-bold">{currentList}</h3>
      <div className="flex flex-col gap-3 px-2 items-start">
        {lists
          .find((list) => list.name === currentList)!
          .tasks.map((task) => (
            <Task key={task.name} name={task.name} />
          ))}
      </div>
    </div>
  );
};

export default SelectedList;
