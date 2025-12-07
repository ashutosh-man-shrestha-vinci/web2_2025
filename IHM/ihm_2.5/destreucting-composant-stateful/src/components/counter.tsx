import { useState } from "react";

export interface CounterProps {
        title: string;
        message: string;
        message2?: string;
    }


    export const Counter = ({ title, message, message2 }: CounterProps) => {
        const [count, setCount] = useState(0);
        const [showMessage, setShowMessage] = useState(false);
        return (
                
            <div onMouseEnter={() => setShowMessage(true)} onMouseLeave={() => setShowMessage(false)} >
                {showMessage && <p>{message2}</p> }
                <h2>{title}</h2>
                <button onClick={() => setCount(count + 1)}>Count: {count}</button>
                {count >=10 && <p>{message}</p>}
            </div>
        );
    }
