import  React  from 'react';
import {buttonProps} from "./types"

export const Button:React.FC<buttonProps>=({variant,children,...restprops})=>{
    const buttonStyle={
        contained:"bg-red-700 hover:bg-red-900 active:bg-red-950",
        text:"",
        outline:" bg-transparent border-2 border-red-300 "
    }
    return (
        <button {...restprops} className={`${buttonStyle[variant ?? "text"]} ${restprops.className} py-2 px-1 w-full rounded-lg`}>{children}</button>

    )
}