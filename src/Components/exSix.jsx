import { useState } from "react"
import { Button } from "./Button/button"

export function Visibility(){

    const [visibility, setVisibility] = useState('visible')

    const tradeVisibility = () => {
        if (visibility === 'visible'){
            return setVisibility('hidden')
    }
    setVisibility('visible')
}

    return (
        <Button onClick={tradeVisibility} text='Trocar visibilidade do texto' className={visibility} />
    )
}