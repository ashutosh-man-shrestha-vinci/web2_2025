import { useState } from "react";

export interface MovieItemProps {
    title: string;
    director: string;
    description: string;
}

export const MovieItem = ({ title, director, description }: MovieItemProps) => {

    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h3 onClick={() => setDescriptionVisible(!isDescriptionVisible)}>{title}</h3>
            <p><strong>Director:</strong> {director}</p>
            {isDescriptionVisible && <p><strong>Description:</strong>: {description}</p>}
        </div>
    );
}