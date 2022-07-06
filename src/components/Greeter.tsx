import React from 'react';

interface GreeterProps {
    person: string;
};

//Can destructure props into your JSX.Element via an interface
function Greeter({ person }: GreeterProps ): JSX.Element {
    return (
        <h1>Hello {person}</h1>
    )
}

export default Greeter;