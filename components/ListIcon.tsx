import { FunctionComponent } from "react";
import { IconContext } from "react-icons";

type Props = {
  color: string;
  icon: React.ReactElement;
};

const ListIcon: FunctionComponent<Props> = ({ color, icon }) => {
  return (
    <div
      className={`self-start justify-self-start w-7 h-7 flex justify-center items-center rounded-full bg-${color}-500 `}
    >
      <IconContext.Provider value={{ color: "white" }}>
        {icon}
      </IconContext.Provider>
    </div>
  );
};

export default ListIcon;
