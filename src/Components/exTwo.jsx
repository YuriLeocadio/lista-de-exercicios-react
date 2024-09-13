import { useState } from "react";
import { Button } from "./Button/button";

export function Contador() {
    const [count, setCount] = useState(0);

    const handleIncrementar = () => {
        setCount(count + 1);
    };

    const handleDecrementar = () => {
        setCount(count - 1);
    };

    return (
        <>
        <Button onClick={handleIncrementar} text='Incrementar'/>
        <Button onClick={handleDecrementar} text='Decrementar'/>
        <h1>Contador: {count}</h1>
        </>
    )
}