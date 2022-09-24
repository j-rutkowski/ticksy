import { FunctionComponent } from "react";
import { IconContext } from "react-icons";

import * as icons from "react-icons/io5";

type Props = {
  color: string;
  icon: string;
};

const ListIcon: FunctionComponent<Props> = ({ color, icon }) => {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <div
      className={`self-start justify-self-start w-7 h-7 flex justify-center items-center rounded-full bg-${color}-500 `}
    >
      <IconContext.Provider value={{ color: "white" }}>
        <Icon />
      </IconContext.Provider>
    </div>
  );
};

export default ListIcon;
