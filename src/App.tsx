import './App.css'
import React, {useState} from "react";

type FilterType = "all" | "dollar" | "ruble";

function App() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])
    let [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter==='dollar') {
        currentMoney=money.filter((f)=>f.banknote==='dollar')
    }
    if (filter==='ruble') {
        currentMoney=money.filter((f)=>f.banknote==='ruble')
    }

    const OnClickHandler = (filterValue: FilterType) => {
        setFilter(filterValue)
    }


    return (
        <div className='App'>
                {currentMoney.map((el, index)=> {
                    return(
                        <li key={index}>
                            <span>{el.banknote}</span>
                            <span> {el.nominal}</span>
                            <span> {el.number}</span>
                        </li>
                    )
                })}
            <button onClick={()=> OnClickHandler ('all')}>ALL</button>
            <button onClick={()=> OnClickHandler ('dollar')}>DOLLAR</button>
            <button onClick={()=> OnClickHandler ('ruble')}>RUBLE</button>


        </div>

    );
}

export default App;