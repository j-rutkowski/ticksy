import { Dispatch, FunctionComponent, SetStateAction } from "react";

type Props = {
  type: string;
  name: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input: FunctionComponent<Props> = ({
  name,
  type,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      type={type}
      placeholder={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => onKeyDown && onKeyDown(e)}
      className='w-full p-3 border-[3px] border-black rounded-xl bg-white focus:outline-none text-lg'
    />
  );
};

export default Input;
