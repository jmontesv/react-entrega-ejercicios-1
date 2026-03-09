
export default function CambiadorColorFondo() {
  
  const crearColorAleatorio = () => {
      const red = Math.floor(Math.random() * 255)
      const green = Math.floor(Math.random() * 255)
      const blue = Math.floor(Math.random() * 255) 
      return `rgb(${red},${green},${blue})`
  }

  const handleClick = () => { 
    document.body.style.backgroundColor = crearColorAleatorio()
  }
  
  return (
    <>
      <h1>Cambiador color de fondo</h1>
      <p>Objetivo del ejercicio: Practicar eventos en JavaScript y manipulación de estilos del DOM.
      Ejercicio:
      Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el
      botón, el color de fondo de la página debe cambiar a un color aleatorio.
      </p>
      <button id="boton-cambiar-color" class="btn btn-primary" onClick={handleClick}>Cambiar color</button>
    </>
  )
}
