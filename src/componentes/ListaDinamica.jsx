import { useState } from "react"

export default function ListaDinamica() {
    const [lista, setLista] = useState([])
    const [texto, setTexto] = useState("")
  
    const handleClick = () => {  
        setLista([...lista, { id: crypto.randomUUID(), texto }])
        setTexto("")
    }

    const handleClickDelete = (e) => { 
        const id = e.target.parentElement.dataset.id
        setLista(lista.filter(item => item.id !== id))
    }

    return (
        <>
            <h1>Lista dinámica</h1>
            <p>
                Objetivo del ejercicio: Trabajar con la creación, eliminación y manipulación de elementos del DOM.
                Ejercicio:
                Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
                Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un
                nuevo elemento de la lista.
                Añade un botón al lado de cada elemento para eliminarlo de la lista.
        
            </p>
            <p>
                <label htmlFor="texto">Texto</label>
                <input id="texto" type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
            </p>
            <button id="agregar-texto" onClick={handleClick}>Agregar</button>
            {
                lista.map(({texto, id}) => (
                    <li className='texto-elemento' key={id} data-id={id}>
                        {texto} 
                        <button className='btn btn-danger' onClick={handleClickDelete}>Eliminar</button>
                    </li>
                ))
            } 
        </>
    )
}
