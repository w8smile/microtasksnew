import React from 'react';
import {FilterType} from "../App";

export type ComponentFilterType = {
    currentMoney: MoneyType []
    OnClickHandler: (filterValue: FilterType)=>void
}

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

export const ComponentFilter = (props: ComponentFilterType) => {
    return (
        <div>
            {props.currentMoney.map((el, index)=> {
                return(
                    <li key={index}>
                        <span>{el.banknote}</span>
                        <span> {el.nominal}</span>
                        <span> {el.number}</span>
                    </li>
                )
            })}
            <button onClick={()=> props.OnClickHandler ('all')}>ALL</button>
            <button onClick={()=> props.OnClickHandler ('dollar')}>DOLLAR</button>
            <button onClick={()=> props.OnClickHandler ('ruble')}>RUBLE</button>


        </div>
    );
};

