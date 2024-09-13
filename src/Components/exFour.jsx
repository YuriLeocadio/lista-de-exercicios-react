import { useState } from "react";
import { Button } from "./Button/button";

export function ButtonTradeColor() {
    const [background, setBackground] = useState('purple');

    const tradeColor = () => {
        if (background === 'purple') {
            return setBackground('blue')
        }
        setBackground('purple')
    };

    return (
        <Button onClick={tradeColor} text='Trocar Cor' className={background} />
    )
}