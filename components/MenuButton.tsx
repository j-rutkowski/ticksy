import { IconContext } from "react-icons";
import {
  IoCaretDownCircleOutline,
  IoCaretUpCircleOutline,
} from "react-icons/io5";

type Props = {
  type: string;
  setIsSidebarOpen: () => void;
};

const MenuButton: React.FunctionComponent<Props> = ({
  type,
  setIsSidebarOpen,
}) => {
  return (
    <button
      onClick={setIsSidebarOpen}
      className={`md:hidden ${
        type === "open" ? "absolute top-8 right-8" : "absolute top-8 right-8"
      }`}
    >
      <IconContext.Provider value={{ color: "dark-gray", size: "2rem" }}>
        {type === "open" ? (
          <IoCaretDownCircleOutline />
        ) : (
          <IoCaretUpCircleOutline />
        )}
      </IconContext.Provider>
    </button>
  );
};

export default MenuButton;
