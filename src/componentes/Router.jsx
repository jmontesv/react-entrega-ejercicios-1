import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./Menu"
import CambiadorColorFondo from "./CambiadorColorFondo"
import ContadorClicks from "./ContadorClicks"
import ListaDinamica from "./ListaDinamica"
import FiltroBusqueda from "./FiltroBusqueda"
import Calculadora from "./Calculadora"
import Temporizador from "./Temporizador"
import GeneradorContraseñas from "./GeneradorContraseñas"
import ContadorPalabrasCaracteres from "./ContadorPalabrasCaracteres"
import ListaTareas from "./ListaTareas"


export default function Router() {
  return (
    <BrowserRouter>
        <h1>Entrega de ejercicios 1 con React</h1>
        <Menu />
        <Routes>
            <Route path="/cambiador-color-fondo" element={<CambiadorColorFondo />} />
            <Route path="/contador-clicks" element={<ContadorClicks />} />
            <Route path="/lista-dinamica" element={<ListaDinamica />} />
            <Route path="/filtro-busqueda" element={<FiltroBusqueda />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/temporizador" element={<Temporizador />} />
            <Route path="/generador-contraseñas" element={<GeneradorContraseñas />} />
            <Route path="/contador-palabras-caracteres" element={<ContadorPalabrasCaracteres />} />
            <Route path="/lista-tareas" element={<ListaTareas />} />
        </Routes>
    </BrowserRouter>
  )
}
