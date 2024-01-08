import './App.css'
import React, {MouseEvent} from "react";
import {Button} from "./components/Button";

function App() {
    // const SubrVasya = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Im Vasya')
    // }
    // const SubrSerg = () => {
    //     console.log('Im Serg')
    // }
    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }
    // const foo1=()=>{
    //     console.log('100200')
    //
    // }
    // const foo2=(num: number)=>{
    //     console.log (num)
    // }

    const foo1 = (sub: string, n:number, p: string) => {
        console.log(sub,n,p)
    }
    const foo2 = (sub: string, n:number, p: string) => {
        console.log(sub,n,p)
    }
    const stpdButton = () => {
        console.log('IAM STUPPID BUTTON')
    }


    return (
        <div className='App'>
            {/*<button onClick={() => onClickHandler('Vasya')}>B1</button>*/}
            {/*<button onClick={() => onClickHandler('Serg')}>B2</button>*/}
            {/*<button onClick={() => onClickHandler('someinf')}>B2</button>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={()=> foo2 (100200) }>2</button>*/}
            <Button title={'Channel-1'} onClick={()=> foo1('HELLO', 55, 'MARS')}/>
            <Button title={'Channel-2'} onClick={()=> foo2('HOW ARE YOU', 77, 'JUPITER')}/>
            <Button title={'STUPID'} onClick={stpdButton}/>

        </div>

    );
}
export default App;