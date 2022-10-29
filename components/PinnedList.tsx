import { FunctionComponent } from "react";
import ListIcon from "../components/ListIcon";
import { truncate } from "../lib/truncate";

type Props = {
  name: string;
  color: string;
  numberOfItems: number;
  icon: string;
  isActive: boolean;
  onClick: (listName: string) => void;
};

const PinnedList: FunctionComponent<Props> = ({
  name,
  color,
  numberOfItems,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`grid grid-rows-2 grid-cols-2 py-2 px-3 w-36 h-[4.6rem] rounded-xl hover:cursor-pointer transition-all ${
        isActive ? "bg-white" : "bg-gray-300 hover:bg-gray-200"
      }`}
      onClick={() => onClick(name)}
    >
      <ListIcon color={color} icon={icon} />
      <span
        className={`font-bold text-lg self-start justify-self-end ${
          !isActive && "text-gray-600"
        }`}
      >
        {numberOfItems}
      </span>
      <span
        className={`w-[7.5rem] font-medium leading-5 self-end justify-self-start ${
          !isActive && "text-gray-600"
        }`}
      >
        {truncate(name, 16)}
      </span>
    </div>
  );
};

export default PinnedList;
