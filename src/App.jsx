import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Encabezado Institucional */}
      <header className="academic-header">
        <div className="header-content">
          <span className="course-name">Fundamentos de la Seguridad e Información</span>
          <h1>Reporte de Incidente: Brecha Rockstar Games 2022</h1>
          <div className="student-info">
            <span className="badge">Proyecto Académico</span>
            <span className="author">Autor: Draco</span>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="main-content">
        <section className="report-card abstract">
          <h2>1. Resumen Ejecutivo</h2>
          <p>
            En septiembre de 2022, un actor de amenazas comprometió la red interna de Rockstar Games. 
            El ataque no se basó en fuerza bruta contra firewalls, sino en la vulneración del factor humano 
            mediante <strong>Ingeniería Social</strong> y <strong>MFA Fatigue</strong> (Fatiga de Autenticación Multifactor).
          </p>
        </section>

        <section className="report-card details">
          <h2>2. Vectores de Ataque Identificados</h2>
          <ul className="threat-list">
            <li><strong>Compromiso de Credenciales:</strong> Obtención de contraseñas de contratistas externos.</li>
            <li><strong>Fatiga MFA:</strong> Bombardeo de notificaciones push hasta que el usuario aceptó el acceso.</li>
            <li><strong>Movimiento Lateral:</strong> Acceso a canales de comunicación internos (Slack) y repositorios de código.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;