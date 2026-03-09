import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <ul>
        <li><Link to="/cambiador-color-fondo">Cambiador color de fondo</Link></li>
        <li><Link to="/contador-clicks">Contador de clicks</Link></li>
        <li><Link to="/lista-dinamica">Lista dinámica</Link></li>
        <li><Link to="/filtro-busqueda">Filtro de búsqueda</Link></li>
        <li><Link to="/calculadora">Calculadora sencilla</Link></li>
        <li><Link to="/temporizador">Temporizador</Link></li>
        <li><Link to="/generador-contraseñas">Generador de contraseñas</Link></li>
        <li><Link to="/contador-palabras-caracteres">Contador de palabras y caracteres</Link></li>
        <li><Link to="/lista-tareas">Lista de tareas</Link></li>
    </ul>
  )
}
