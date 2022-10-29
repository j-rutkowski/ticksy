import { FunctionComponent } from "react";

type ButtonProps = {
  name: string;
  onClick: () => any;
  color?: string;
};

const Button: FunctionComponent<ButtonProps> = ({ name, onClick, color }) => {
  return (
    <button
      className={`${
        color
          ? "bg-" + color + "-500 hover:bg-" + color + "-600"
          : "bg-blue-500 hover:bg-blue-600"
      } text-white font-medium p-3 rounded-xl w-full text-lg transition-all`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
