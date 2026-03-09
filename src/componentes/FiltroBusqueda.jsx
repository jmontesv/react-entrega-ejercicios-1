import { useState } from "react"


export default function FiltroBusqueda() {
    const [lista, setLista] = useState(["Perro", "Gato", "Pez"])
    const [filtro, setFiltro] = useState("")

    const handleChange = (e) => { 
        const valor = e.target.value.toLowerCase()
        setFiltro(valor)
        setLista(["Perro", "Gato", "Pez"].filter(item => item.toLowerCase().includes(valor)))
    }
    
    return (
        <div className="filtro-container">
            <h1>Filtro de búsqueda</h1>
            <p>
                Objetivo del ejercicio: Practicar la interacción entre eventos del DOM y lógica en JavaScript.
                Ejercicio:
                Crea una página con un campo de texto y una lista predefinida de elementos.
                Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para
                mostrar solo los elementos que contienen el texto escrito.
                Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe
                quedar visible.
        
            </p>
            <label htmlFor="campo-texto">Texto</label>
            <input id="campo-texto" type="text" placeholder="Escribe para filtrar..." value={filtro} onChange={handleChange} />
            <ul className="lista">
            {
                lista.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
            </ul>
        </div>
  )
}
