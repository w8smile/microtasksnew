import './App.css'
import React, {useState} from "react";


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

    let [filter, setFilter] = useState('all')

    let currentMoney = money;
    if (filter==='dollar') {
        currentMoney=money.filter((f)=>f.banknote==='dollar')
    }
    if (filter==='ruble') {
        currentMoney=money.filter((f)=>f.banknote==='ruble')
    }




    const OnClickFilterHandler = (fn: string) => {
        setFilter(fn)
    }

    return (
        <div className='App'>
            {currentMoney.map((el) => {
                return (
                    <li>
                        <span>{el.banknote}</span>
                        <span> {el.nominal}</span>
                        <span> {el.number}</span>
                    </li>
                )
            })}
            <button onClick={() => OnClickFilterHandler('all')}>all</button>
            <button onClick={() => OnClickFilterHandler('ruble')}>ruble</button>
            <button onClick={() => OnClickFilterHandler('dollar')}>dollar</button>
        </div>

    );
}

export default App;