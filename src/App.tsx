import './App.css'
import React, {useState} from "react";

function App() {
    let [a, setA]=useState(0);

    const OnClickHandler = () => {
        if (a<5)
        setA(++a);
    }
    const RstHandler = () => {
        if (a>3)
        setA(0);
    }
    return (
        <div className='App'>
            <h1>{a}</h1>
            <button onClick={OnClickHandler}>+</button>
            <button onClick={RstHandler}>RES</button>
        </div>

    );
}
export default App;