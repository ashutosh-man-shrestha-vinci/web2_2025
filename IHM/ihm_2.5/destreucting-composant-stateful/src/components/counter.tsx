import { useState } from "react";

export interface CounterProps {
        title: string;
        message: string;
    }


    export const Counter = ({ title, message }: CounterProps) => {
        const [count, setCount] = useState(0);
        return (
            <div>
                <h2>{title}</h2>
                <button onClick={() => setCount(count + 1)}>Count: {count}</button>
                {count >=10 && <p>{message}</p>}
            </div>
        );
    }