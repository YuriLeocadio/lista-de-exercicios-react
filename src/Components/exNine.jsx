import { useState } from "react";
import { Button } from "./Button/button";

export function CalculadoraSomatorio() {
    const [numero1, setNumero1] = useState(null)
    const [numero2, setNumero2] = useState(null)
    const [soma, setSoma] = useState(null)

    const calcularSoma = () => {
        setSoma(parseFloat(numero1) + parseFloat(numero2))
    }

    return (
        <>
            <h1>Calculadora de Somátorio</h1>
            <div>
                <label>Digite o primeiro número:</label>
                <input type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
            </div>

            <div>
                <label>Digite o segundo número</label>
                <input type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
            </div>
            <Button text='Calcular Soma' onClick={calcularSoma} />
            {soma !== null && (
                <p>A soma dos números é: {soma}</p>
            )}
        </>
    )
}