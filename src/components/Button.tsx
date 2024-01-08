import React from "react";


type ButtonPropsType = {
    title: string
    onClick: ()=> void
}
export const Button = (props: ButtonPropsType) => {
    const OnClickHandler = () => {props.onClick()}
    return(
        <button onClick={OnClickHandler}>{props.title}</button>
    )
}