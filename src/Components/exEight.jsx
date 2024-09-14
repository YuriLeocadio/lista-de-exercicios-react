import { useState } from "react";

export function ContadorDeCaracteres() {
    const [texto, setTexto] = useState('')

    const handleTextoChange = (event) => {
        setTexto(event.target.value)
    }

    return (
        <>
            <h1>Contador de Caracteres</h1>
            <textarea value={texto} onChange={handleTextoChange} placeholder="Digite seu texto aqui" />
            <p>Número de caracteres: {texto.length}</p>
        </>
    )
}