import { Dispatch, FunctionComponent, SetStateAction } from "react";
import ListIcon from "./ListIcon";
import { IoEllipsisVertical } from "react-icons/io5";
import { IconContext } from "react-icons";

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
    <div className='flex flex-row items-center justify-between gap-2 group'>
      <div
        className={`w-full flex flex-column justify-between items-center hover:cursor-pointer hover:bg-gray-200 p-2 rounded-lg ${
          isActive && "bg-white hover:bg-white"
        }`}
        onClick={() => onClick(name)}
      >
        <div className='flex gap-2 items-center'>
          <ListIcon color={color} icon={icon} />
          <span className='text-sm text-gray-800'>{name}</span>
        </div>
        <span className='text-sm text-gray-400'>{numberOfItems}</span>
      </div>
      <IconContext.Provider
        value={{
          color: "gray",
          className:
            "opacity-0 hover:brightness-125 hover:cursor-pointer transition-all duration-200 group-hover:opacity-100",
        }}
      >
        <IoEllipsisVertical />
      </IconContext.Provider>
    </div>
  );
};
export default List;
