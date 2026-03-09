import { useState } from "react"

export default function GeneradorContraseñas() {
    const [passwordGenerada, setPasswordGenerada] = useState("")
    const [error, setError] = useState("")

    const generarPasswordAleatoria = (longitud) => {
        let passwordGenerada = "" 
        
        for (let i = 0; i < longitud; i++) {
            const caracterGenerado = String.fromCharCode(
                Math.floor(Math.random() * (126 - 33 + 1)) + 33 // Rango desde 33 al 126 (Caracteres imprimibles)
            )
            passwordGenerada += caracterGenerado
        }
        return passwordGenerada
    }

    const validarLongitud = (valor) => {
        if (valor === "") {
            return false
        }
        if (valor < 4) {
            return false
        }
        return true
    }

    const handleSubmit = (event) => { 
        event.preventDefault()
        const numeroCaracteres = event.target.numeroCaracteres.value
        if (!validarLongitud(numeroCaracteres)) {
            setError("La longitud debe ser mayor o igual a 4")
            setPasswordGenerada("")
        }else {
            const password = generarPasswordAleatoria(parseInt(numeroCaracteres))
            setPasswordGenerada(password)
            setError("")
        }
    }
    
    return (
        <div className="password-generator-container">
            <h1>Generador de contraseñas aleatorias</h1>
            <p>
                Objetivo del ejercicio: Practicar generación de cadenas aleatorias y uso de formularios.
                Ejercicio:
                Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que
                diga “Generar contraseña”.
                Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando
                letras, números y caracteres especiales.
                Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la
                longitud debe ser mayor o igual a 4.
            </p>
            <form id="formulario" onSubmit={handleSubmit}>
                <label htmlFor="numeroCaracteres">Número de caracteres</label>
                <input type="number" name="numeroCaracteres" id="numeroCaracteres" placeholder="Introduce longitud" />
                <button className="btn btn-primary" id="crearPassword" type="submit">Generar contraseña</button>
            </form>
            <p id="passwordGenerada">{passwordGenerada}</p>
            <p id="error">{error}</p>
        </div>
    )
}
