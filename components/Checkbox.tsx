import { motion } from "framer-motion";

type Props = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox: React.FunctionComponent<Props> = ({
  label,
  checked,
  onChange,
}) => {
  const boxVariants = {
    pressed: { scale: 0.65 },
  };

  const checkVariants = {
    checked: { pathLength: 1, opacity: 1 },
    unChecked: { pathLength: 0, opacity: 0 },
  };

  return (
    <label className='flex gap-2 items-center'>
      <input
        type='checkbox'
        onChange={onChange}
        checked={checked}
        className='hidden-checkbox'
      />
      <motion.div
        className='w-5 h-5 rounded-md border-[2px] border-gray-400 hover:cursor-pointer'
        initial={false}
        whileTap='pressed'
        variants={boxVariants}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <motion.path
            fill='none'
            stroke='black'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='64'
            d='M416 128L192 384l-96-96'
            initial={false}
            animate={checked ? "checked" : "unChecked"}
            variants={checkVariants}
          />
        </svg>
      </motion.div>
      <span className='select-none'>{label}</span>
    </label>
  );
};

export default Checkbox;
