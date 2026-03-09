import { useState } from "react"

export default function ContadorClicks() {
    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(clicks + 1)
    }

    return (
        <>
            <h1>Contador de clicks</h1>
            <p>
                Objetivo del ejercicio: Practicar el manejo de eventos y la actualización del contenido del DOM.
                Ejercicio:
                Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada
                vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics
                realizados.
            </p>
            <h2 id="contador">{clicks}</h2>
            <button id="hacer-click" class="btn btn-primary" onClick={handleClick}>Click</button>
        </>
    )
}
