/* eslint-disable @typescript-eslint/no-explicit-any */
export interface textfieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?:string,
    placeholder?:string,
    helpertext?:React.ReactNode
    icon?:string,
    validation:any
}