import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    addMessage: (title: string)=>void
}
export const FullInput = (props: FullInputType) => {

    let [title,setTitle] = useState('')
    const OnChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.currentTarget.value)
    }

    const OnClickHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={OnChangeHandler}/>
            <button onClick={OnClickHandler}>+</button>
        </div>
    );
};

