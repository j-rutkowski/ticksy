import { FunctionComponent } from "react";
import { IconContext } from "react-icons";
import loadable from "@loadable/component";
import dynamic from "next/dynamic";
import { IoCalendar, IoStar, IoFlag, IoList } from "react-icons/io5";

type Props = {
  color: string;
  icon: string;
};

const ListIcon: FunctionComponent<Props> = ({ color, icon }) => {
  const Icon = dynamic(() =>
    import("react-icons/io5/index.js").then((icons) => icons[icon])
  );

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
