import { FunctionComponent } from "react";

type ButtonProps = {
  name: string;
  onClick: () => any;
  color: string;
};

const SmallButton: FunctionComponent<ButtonProps> = ({
  name,
  onClick,
  color,
}) => {
  return (
    <button
      className={`${
        "bg-" + color + "-500 hover:bg-" + color + "-600"
      } text-white font-medium p-2 rounded-lg w-full transition-all`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default SmallButton;
