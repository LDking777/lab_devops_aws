import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Laboratorio DevOps - AWS</h1>

      <h2>Desplegado con AWS Amplify</h2>

      <section>
        <h3>Integrantes</h3>
        <p>María José Cordón Vasco</p>
        <p>Jhoann Esteban Reyes Higuera</p>
      </section>

      <section>
        <h3>Información del proyecto</h3>
        <p>Curso: Laboratorio DevOps</p>
        <p>
          Proyecto desarrollado con React, Vite y AWS Amplify.
        </p>
      </section>

      <section>
        <h3>Contador React</h3>
        <p>Has hecho clic {count} veces.</p>

        <button onClick={() => setCount(count + 1)}>
          Incrementar contador
        </button>
      </section>
    </main>
  )
}

export default App