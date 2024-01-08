import React from 'react';

type HeaderType = {
    title: string
}
export const Header = (props: HeaderType) => {
    return (
        <div>
            Header {props.title}
        </div>
    );
};

