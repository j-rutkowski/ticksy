import { FunctionComponent } from "react";
import ListIcon from "./ListIcon";

type Props = {
  name: string;
  color: string;
  numberOfItems: number;
  icon: string;
};

const List: FunctionComponent<Props> = ({
  name,
  color,
  numberOfItems,
  icon,
}) => {
  return (
    <div className="flex flex-column justify-between">
      <div className="flex gap-2 items-center">
        <ListIcon color={color} icon={icon} />
        <span className="text-sm text-gray-800">{name}</span>
      </div>
      <span className="text-sm text-gray-400">{numberOfItems}</span>
    </div>
  );
};
export default List;
