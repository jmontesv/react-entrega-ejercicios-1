import { useState } from "react"

export default function Temporizador() {
    const [temporizador, setTemporizador] = useState({ horas: 0, minutos: 0, segundos: 0 })
    const [intervalId, setIntervalId] = useState(null)

    const iniciarTemporizador = () => {
        const id = setInterval(() => { 
            setTemporizador(prev => { 
                let { horas, minutos, segundos } = prev
                segundos++
                if (segundos === 60) { 
                    segundos = 0
                }
                if (segundos === 0) { 
                    minutos++
                }
                if (minutos === 60) { 
                    minutos = 0
                }
                if (minutos === 0 && segundos === 0) { 
                    horas++
                }
                return { horas, minutos, segundos }
            })
        }, 1000)
        setIntervalId(id)
    }

    const pausarTemporizador = () => { 
        clearInterval(intervalId)
    }

    const reiniciarTemporizador = () => { 
        clearInterval(intervalId)
        setTemporizador({ horas: 0, minutos: 0, segundos: 0 })
    }


    return (
        <div className="temporizador-container">
            <h1>Temporizador</h1>
            <p>
                Objetivo del ejercicio: Practicar manejo de eventos, funciones de temporización y manipulación del DOM.
                Ejercicio:
                Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar”
                y “Reiniciar”.
                Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.
                “Pausar” detiene el conteo pero mantiene el tiempo actual.
                “Reiniciar” pone el temporizador en 00:00:00.
            </p>
            <div id="temporizador">
            <span id="horas">{temporizador.horas.toString().padStart(2, '0')}</span>
                <span>:</span>
                <span id="minutos">{temporizador.minutos.toString().padStart(2, '0')}</span>
                <span>:</span>
                <span id="segundos">{temporizador.segundos.toString().padStart(2, '0')}</span>
            </div>
            <div className="actions">
                <button className="btn btn-primary" id="iniciar" onClick={() => iniciarTemporizador()}>Iniciar</button>
                <button className="btn btn-danger" id="pausar" onClick={() => pausarTemporizador()}>Pausar</button>
                <button className="btn btn-info" id="reiniciar" onClick={() => reiniciarTemporizador()}>Reiniciar</button>
            </div>
        </div>
    ) 
}
