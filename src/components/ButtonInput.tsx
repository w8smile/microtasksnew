import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=> void
}

export const ButtonInput = (props: ButtonPropsType) => {
    return (
        <div>
            <button onClick={props.callBack}>{props.name}</button>
        </div>
    );
};

export default ButtonInput;