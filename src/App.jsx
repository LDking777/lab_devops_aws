import { useState } from 'react'
import './App.css'

const techs = [
  { icon: '📚', label: 'Curso', value: 'Laboratorio DevOps' },
  { icon: '⚛️', label: 'Tecnología', value: 'React + Vite' },
  { icon: '☁️', label: 'Despliegue', value: 'AWS Amplify' },
]

const students = [
  { initials: 'MJ', name: 'María José', lastName: 'Cordón Vasco', role: 'Estudiante' },
  { initials: 'JE', name: 'Jhoann Esteban', lastName: 'Reyes Higuera', role: 'Estudiante' },
  { initials: 'WL', name: 'Willington', lastName: 'Londoño', role: 'Profesor' },
]

const pipeline = [
  { step: '01', title: 'Desarrollo', text: 'Construcción local con React y Vite.' },
  { step: '02', title: 'Repositorio', text: 'Versionamiento del código con Git.' },
  { step: '03', title: 'Build', text: 'Compilación automática en AWS Amplify.' },
  { step: '04', title: 'Publicación', text: 'Aplicación disponible en la web.' },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <div className="bg-glow bg-glow--one" />
      <div className="bg-glow bg-glow--two" />

      <main className="app">
        {/* Encabezado */}
        <header className="hero">
          <span className="badge">
            <span className="badge__dot" /> Laboratorio DevOps
          </span>
          <h1>
            Laboratorio DevOps <span className="accent">· AWS</span>
          </h1>
          <p className="subtitle">
            Aplicación web desarrollada con React y desplegada mediante AWS Amplify
          </p>
        </header>

        {/* Proyecto */}
        <section className="card">
          <div className="card__header">
            <span className="card__icon">🚀</span>
            <h2>Proyecto</h2>
          </div>
          <p className="card__text">
            Esta aplicación hace parte del laboratorio de DevOps y demuestra el
            proceso de desarrollo y despliegue de una aplicación React utilizando
            servicios de AWS.
          </p>

          <div className="tech-grid">
            {techs.map((t) => (
              <div className="tech-card" key={t.label}>
                <span className="tech-card__icon">{t.icon}</span>
                <span className="tech-card__label">{t.label}</span>
                <strong className="tech-card__value">{t.value}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* Flujo de despliegue */}
        <section className="card">
          <div className="card__header">
            <span className="card__icon">🔄</span>
            <h2>Flujo de despliegue</h2>
          </div>
          <ol className="pipeline">
            {pipeline.map((p) => (
              <li className="pipeline__item" key={p.step}>
                <span className="pipeline__step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Integrantes */}
        <section className="card">
          <div className="card__header">
            <span className="card__icon">👥</span>
            <h2>Integrantes del proyecto</h2>
          </div>
          <div className="students">
            {students.map((s) => (
              <article className="student-card" key={s.name}>
                <div className="avatar">{s.initials}</div>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.lastName}</p>
                  <span className="chip">{s.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Interactividad */}
        <section className="card card--center">
          <div className="card__header card__header--center">
            <span className="card__icon">⚡</span>
            <h2>Interactividad con React</h2>
          </div>
          <p className="card__text">
            Prueba la funcionalidad de la aplicación haciendo clic en los botones.
          </p>

          <div className="counter" key={count}>
            {count}
          </div>

          <div className="actions">
            <button className="btn btn--primary" onClick={() => setCount(count + 1)}>
              + Incrementar
            </button>
            <button
              className="btn btn--ghost"
              onClick={() => setCount(0)}
              disabled={count === 0}
            >
              ↺ Reiniciar
            </button>
          </div>
        </section>

        {/* Pie de página */}
        <footer className="footer">
          <p>Laboratorio DevOps • React • Vite • AWS Amplify</p>
          <p className="footer__year">{new Date().getFullYear()}</p>
        </footer>
      </main>
    </div>
  )
}

export default App