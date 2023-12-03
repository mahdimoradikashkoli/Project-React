import React from "react";
import {textfieldProps} from "./type"


export const Textfield:React.FC<textfieldProps> =({label,placeholder,validation,icon,helpertext,...restprops})=>{

    const id=React.useId()

    return (
        <div>
          <div className="flex flex-col ">
            {(label) && <label className="ps-1 mb-0.5 text-md" htmlFor={id}>
              {label}
            </label>}
            <div className="flex w-full items-center  focus-within:border-blue-700 text-sm font-thin focus-within:border-2 border-2 border-transparent rounded-lg bg-slate-100 overflow-hidden">
             {(icon) && <img src={icon} className="w-6 h-6 p-0.5" alt="email logo" />}
              <input
              {...restprops}
                className="w-full bg-inherit border-none outline-none px-1 py-2 "
                placeholder={placeholder}
                id={id}
                {...validation}
              />
            </div>
            {Boolean(helpertext) && <p className="ps-1 mt-0.5 text-xs text-red-500">{helpertext}</p>}
          </div>
        </div>
    )
}