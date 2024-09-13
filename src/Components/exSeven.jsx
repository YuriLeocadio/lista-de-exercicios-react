import { useState } from "react";

export function TextBox() {

    const [texto, setTexto] = useState('');

    const handleChange = (event) => {
        setTexto(event.target.value);
    };

    return (
        <div>
            <input type="text" value={texto} onChange={handleChange} placeholder="Digite algo..." />
            <p>{texto}</p>
        </div>
    );
}