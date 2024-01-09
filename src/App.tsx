import './App.css'
import React, {useState} from "react";
import {FullInput} from "./components/FullInput";
import Input from "./components/Input";
import ButtonInput from "./components/ButtonInput";

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title,setTitle]=useState('');


    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage,...message])

    }

    const buttonHandler = () => {
        addMessage(title)
        setTitle('')
    }






    return (
        <div className="App">
            <div>
                <ButtonInput name={'++'} callBack={buttonHandler}/>
                <Input title={title} setTitle={setTitle}/>
            </div>

            {/*<FullInput*/}
            {/*    addMessage={addMessage}/>*/}
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