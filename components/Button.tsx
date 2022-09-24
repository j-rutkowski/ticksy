import { FunctionComponent } from "react";

type ButtonProps = {
  name: string;
  onClick: () => any;
};

const Button: FunctionComponent<ButtonProps> = ({ name, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-medium p-3 rounded-xl w-full text-lg transition-all"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
