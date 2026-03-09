import React, { useState } from "react"


export default function Calculadora() {
    const [error, setError] = useState("")
    const [resultado, setResultado] = useState(null)
    
    const primerNumero = React.useRef(null)
    const segundoNumero = React.useRef(null)
    
    const validarEntrada = (num1, num2, operacion) => {
        if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
            return
        }
        if (operacion === 'dividir' && parseFloat(num2) === 0) { 
            return 
        }
        return true
    }

    const handleOperacion = (operacion) => {
        const num1 = primerNumero.current.value
        const num2 = segundoNumero.current.value
        if (!validarEntrada(num1, num2, operacion)) {
            setError("Entrada inválida. Asegúrate de ingresar números válidos y no dividir por cero.")
            setResultado("")
            return
        }
        setError("")
        switch (operacion) { 
            case "sumar":
                setResultado(parseFloat(num1) + parseFloat(num2))
                break
            case "restar":
                setResultado(parseFloat(num1) - parseFloat(num2))
                break
            case "multiplicar":
                setResultado(parseFloat(num1) * parseFloat(num2))
                break
            case "dividir":
                setResultado(parseFloat(num1) / parseFloat(num2))
                break
        }
    }


    return (
        <div className="calculadora-container">
            <h1>Calculadora sencilla</h1>
            <p>
                Objetivo del ejercicio: Practicar la manipulación de formularios, eventos, y lógica básica de
                JavaScript.
                Ejercicio:
                Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar",
                "Multiplicar", y "Dividir".
                Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un
                área de texto o debajo de los botones.
                Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).
            </p>
            <input ref={primerNumero} type="number" id="primerNumero" placeholder="Primer número" />
            <input ref={segundoNumero} type="number" id="segundoNumero" placeholder="Segundo número" />

            <button className="btn btn-primary" onClick={() => handleOperacion("sumar")}>Sumar</button>
            <button className="btn btn-primary" onClick={() => handleOperacion("restar")}>Restar</button>
            <button className="btn btn-primary" onClick={() => handleOperacion("multiplicar")}>Multiplicar</button>
            <button className="btn btn-primary" onClick={() => handleOperacion("dividir")}>Dividir</button>

            <p id="resultado">{resultado !== null ? `Resultado: ${resultado}` : ''}</p>
            <p id="error">{error}</p>
        </div>
    )
}
