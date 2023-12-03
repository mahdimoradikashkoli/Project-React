import React from "react"

export interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: "contained" | "text" | "outline",
    children:React.ReactNode
}