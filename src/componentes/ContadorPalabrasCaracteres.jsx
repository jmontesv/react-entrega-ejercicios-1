import { useState } from "react"


export default function ContadorPalabrasCaracteres() {
    const [numeroPalabras, setNumeroPalabras] = useState(0)
    const [numeroCaracteres, setNumeroCaracteres] = useState(0)
    const [texto, setTexto] = useState("")

    const calcularNumeroCaracteres = (cadena) => {
        const sinBlancos = cadena.replace(/\s+/g, "")
        return sinBlancos.length
    }

    const calcularNumeroPalabras = (cadena) => {    
        const palabras = cadena.trim().split(/\s+/)
        if (palabras[0] === "") return 0
        return palabras.length
    }

    const handleChange = (e) => {
        const texto = e.target.value
        setTexto(texto)
        setNumeroCaracteres(calcularNumeroCaracteres(texto))
        setNumeroPalabras(calcularNumeroPalabras(texto))
    }
    
    return (
        <div className="contador-container">
            <h1>Contador de palabras y caracteres</h1>
            <p>
                Objetivo del ejercicio: Practicar eventos en tiempo real y manipulación avanzada del DOM.
                Ejercicio:
                Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
                Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
                Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de línea.
            </p>
            <label for="texto">Texto</label>
            <input type="text" name="texto" id="texto" placeholder="Escribe aquí..." value={texto} onChange={handleChange} />

            <p id="parrafo">{texto}</p>

            <h2>Palabras</h2>
            <p id="numeroPalabras">{numeroPalabras}</p>

            <h2>Caracteres</h2>
            <p id="numeroCaracteres">{numeroCaracteres}</p>
        </div>
    )
}
