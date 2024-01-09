import './App.css'
import React, {useState} from "react";
import {FullInput} from "./components/FullInput";

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage,...message])

    }



    return (
        <div className="App">
            <FullInput
                addMessage={addMessage}/>
            {/*<div>*/}
            {/*    <input />*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;