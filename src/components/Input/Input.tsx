import React from 'react';

interface InputProps{
    id: string;
    onChange: any;
    value: string;
    label: string;
    name: string
    type?: string;
}

const Input: React.FC<InputProps> = ({id, onChange, value, label, type, name}) => {
   

    return (
        <div className=" relative my-4 md:my-8">
        { type === "textarea" ? <textarea onChange={onChange}
          value={value}
          id={id}
          name={name}
          rows= {6}
          className="
          resize-none
          block
          rounded-md 
          px-6
          pt-6
          pb-1
          w-full
          text-md
          border-2
          border-zinc-700
          focus:outline-none
          focus:border-zinc-400
          peer"
          placeholder=" "> </textarea> : <input
          onChange={onChange}
          type={type}
          value={value}
          id={id}
          name={name}
          className="
          block
          rounded-md 
          px-6
          pt-6
          pb-1
          w-full
          text-md
          border-2
          border-zinc-700
          focus:outline-none
          focus:border-zinc-400
          peer"
          placeholder=" "
        />}
        <label className="
        absolute
        text-md
        text-zinc-700
        font-semibold
        duration-150
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        origin-[0]
        left-6
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3
        "
        htmlFor={id}>{label}</label>
      </div>
    );
};

export default Input;