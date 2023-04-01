import React from "react";
interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        id={id}
        value={value}
        type={type}
        className="block w-full px-6 pt-6 pb-1 text-white rounded appearance-none text-md bg-neutral-700 focus:right-0 focus: peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute duration-150 transform -translate-y-3  text-md text-zinc-400 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
