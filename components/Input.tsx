import { Dispatch, FunctionComponent, SetStateAction } from "react";

type Props = {
  type: string;
  name: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

const Input: FunctionComponent<Props> = ({ name, type, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='w-full p-3 border-[3px] border-black rounded-xl bg-white focus:outline-none text-lg'
    />
  );
};

export default Input;
