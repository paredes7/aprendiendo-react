import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'//importa el estilo general de la pagina

//importamos componente de App.jsx
import { App } from './App.jsx'

/**🔹 1. ¿Qué es document.getElementById('root')?
👉 Es JavaScript puro.
Busca en el HTML principal el elemento con id="root".
Normalmente en index.html de un proyecto React verás algo como:
<div id="root"></div>
Ese <div> es el contenedor donde React va a "montar" toda tu aplicación. */

/**🔹 2. ¿Qué es createRoot(...)?
createRoot es una función de la librería React DOM (react-dom/client).
Se encarga de crear el “árbol raíz” de tu aplicación React. */

/**🔹 3. ¿Qué hace .render(<App />)?
- Le decimos a React: “renderiza el componente <App /> dentro del root”.
- <App /> es tu componente principal (generalmente está en App.jsx).
- Todo lo que esté dentro de <App /> será lo que React pinte en pantalla. */
const root = createRoot(document.getElementById('root'))
root.render(
    <App />
  
)
