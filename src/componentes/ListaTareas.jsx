import { useState } from "react"


const tareasIniciales = [
    { id: crypto.randomUUID(), texto: "Pasear al perro", completada: true },
    { id: crypto.randomUUID(), texto: "Hacer la comida", completada: true },
    { id: crypto.randomUUID(), texto: "Lavar la ropa", completada: false }
]

export default function ListaTareas() {
    
    const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) || tareasIniciales)

    const HandleChangeCompletedTask = (e) => { 
        const idTarea = e.target.parentElement.dataset.id
        
        const tareasActualizadas = tareas.map(tarea => { 
            if (tarea.id === idTarea) {
                return { ...tarea, completada: !tarea.completada }
            }
            return tarea
        })
        setTareas(tareasActualizadas)
        localStorage.setItem("tareas", JSON.stringify(tareasActualizadas))
    }

    const handleClickDeleteTasksCompleted = () => { 
        const tareasActualizadas = tareas.filter(tarea => !tarea.completada)
        setTareas(tareasActualizadas)
        localStorage.setItem("tareas", JSON.stringify(tareasActualizadas))
    }

    return (
        <>
            <h1>Lista de tareas</h1>
            <p>
                Objetivo del ejercicio: Practicar persistencia de datos con localStorage.
                Ejercicio: Crea una aplicación de lista de tareas.
                Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
                Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
                Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage
            </p>
            <ul id="tareas">
                {
                    tareas.map(tarea => (
                        <li key={tarea.id} className={`tarea ${tarea.completada ? "completada" : ""}`} data-id={`${tarea.id}`}>
                            <p>{tarea.texto}</p>
                            <input type="checkbox" checked={`${tarea.completada ? "checked" : ""}`} onChange={HandleChangeCompletedTask}/>
                        </li>  
                    ))
                }
            </ul>
            <button id="limpiarTareasCompletadas" className="btn btn-danger" onClick={handleClickDeleteTasksCompleted}>Limpiar tareas completadas</button>
        </>
    )
}
