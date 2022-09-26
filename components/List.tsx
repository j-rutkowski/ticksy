import { Dispatch, FunctionComponent, SetStateAction } from "react";
import ListIcon from "./ListIcon";

type Props = {
  name: string;
  color: string;
  numberOfItems: number;
  icon: string;
  isActive: boolean;
  onClick: Dispatch<SetStateAction<string>>;
};

const List: FunctionComponent<Props> = ({
  name,
  color,
  numberOfItems,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-column justify-between items-center hover:cursor-pointer hover:bg-gray-200 p-2 rounded-lg ${
        isActive && "bg-white hover:bg-white"
      }`}
      onClick={() => onClick(name)}
    >
      <div className="flex gap-2 items-center">
        <ListIcon color={color} icon={icon} />
        <span className="text-sm text-gray-800">{name}</span>
      </div>
      <span className="text-sm text-gray-400">{numberOfItems}</span>
    </div>
  );
};
export default List;
