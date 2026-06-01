import { useState } from 'react';
import './App.css';

function App() {
  // Estado para controlar la diapositiva actual (del 1 al 5)
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 5;

  const handleNext = () => {
    if (currentSlide < totalSlides) setCurrentSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="app-container">
      <header className="academic-header">
        <div className="header-content">
          <div className="header-top-bar">
            <span className="course-name">INACAP - Fundamentos de la Seguridad e Información</span>
            <div className="action-buttons">
              <button onClick={handleFullScreen} className="btn-action">🔲 Pantalla Completa</button>
              <button onClick={handlePrint} className="btn-action">📄 Exportar PDF</button>
            </div>
          </div>
          <h1>Análisis de Incidente: Caso Rockstar Games 2022</h1>
          <div className="student-info">
            <span className="badge">Evaluación Avanzada</span>
            <span className="author">Alumno: Josué Durand</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        
        {/* Controles de Navegación Superiores */}
        <div className="slide-controls">
          <button onClick={handlePrev} disabled={currentSlide === 1} className="btn-nav">
            ◄ Anterior
          </button>
          <div className="progress-indicator">
            Sección {currentSlide} de {totalSlides}
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(currentSlide / totalSlides) * 100}%` }}></div>
            </div>
          </div>
          <button onClick={handleNext} disabled={currentSlide === totalSlides} className="btn-nav">
            Siguiente ►
          </button>
        </div>

        {/* 2.1.1 MARCO NORMATIVO (Slide 1) */}
        <section className={`report-card ${currentSlide === 1 ? 'active' : 'hidden'}`}>
          <span className="rubric-tag rubric-tag-red">Criterio 2.1.1</span>
          <h2>1. Marco Normativo Nacional e Internacional</h2>
          <div className="card-body">
            <p>Evaluación de normativas aplicables al compromiso de activos de información en el desarrollo de GTA VI:</p>
            <div className="norm-grid">
              <div className="norm-item inacap-border">
                <h3>ISO/IEC 27001 (Internacional)</h3>
                <p><strong>Hecho Concreto:</strong> Falla en el control de acceso y gestión de contratistas. El atacante vulneró la cadena de suministro al comprometer a un desarrollador externo mediante ingeniería social.</p>
              </div>
              <div className="norm-item inacap-border">
                <h3>NIST SP 800-63B (Internacional)</h3>
                <p><strong>Hecho Concreto:</strong> Directrices de autenticación digital. El incidente expuso la debilidad de las notificaciones push simples al sufrir un ataque de "MFA Fatigue".</p>
              </div>
              <div className="norm-item inacap-border">
                <h3>Ley 19.628 (Nacional - Chile)</h3>
                <p><strong>Hecho Concreto:</strong> Protección de la vida privada. La exfiltración de credenciales corporativas y canales de Slack expuso datos personales de los trabajadores sin consentimiento.</p>
              </div>
              <div className="norm-item inacap-border">
                <h3>GDPR - Art. 32 (Internacional)</h3>
                <p>Regula la seguridad del tratamiento de datos. Los entornos comprometidos almacenaban bitácoras e identificadores de usuarios internos del entorno de desarrollo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2.1.2 TIPIFICACIÓN (Slide 2) */}
        <section className={`report-card ${currentSlide === 2 ? 'active' : 'hidden'}`}>
          <span className="rubric-tag rubric-tag-red">Criterio 2.1.2</span>
          <h2>2. Tipificación de Delitos Informáticos (Ley 21.459)</h2>
          <div className="card-body">
            <p>Mapeo de las conductas ejecutadas por el atacante (Lapsus$) bajo la legislación penal informática chilena:</p>
            <table className="legal-table inacap-table">
              <thead>
                <tr>
                  <th>Acción del Atacante</th>
                  <th>Artículo Ley 21.459</th>
                  <th>Sanción Asociada / Análisis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ingreso a la consola de AWS y Slack usando credenciales robadas del contratista.</td>
                  <td><strong>Art. 1: Acceso ilícito</strong> (Inciso 1°)</td>
                  <td>Penaliza al que acceda a un sistema informático sin autorización con ánimo de conocer la información.</td>
                </tr>
                <tr>
                  <td>Descarga de 90 videos de la fase alfa de GTA VI y líneas de código fuente.</td>
                  <td><strong>Art. 2: Interceptación ilícita</strong></td>
                  <td>Aplica a la interceptación o captura de transmisiones no públicas de datos informáticos.</td>
                </tr>
                <tr>
                  <td>Secuestro de datos y extorsión en canales públicos pidiendo dinero.</td>
                  <td><strong>Art. 3: Interferencia de datos</strong></td>
                  <td>Sanciona la alteración o daño de datos que obstruyan el normal funcionamiento de la organización.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 2.1.3 COMPARACIÓN (Slide 3) */}
        <section className={`report-card ${currentSlide === 3 ? 'active' : 'hidden'}`}>
          <span className="rubric-tag rubric-tag-red">Criterio 2.1.3</span>
          <h2>3. Comparación de Marcos Regulatorios</h2>
          <div className="card-body">
            <div className="table-responsive">
              <table className="comparison-table inacap-table">
                <thead>
                  <tr>
                    <th>Eje de Comparación</th>
                    <th>Ley 21.459 (Chile)</th>
                    <th>GDPR (Unión Europea)</th>
                    <th>ISO/IEC 27001</th>
                    <th>Aplicabilidad al Caso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Alcance / Foco</strong></td>
                    <td>Penal (Persecución de delitos)</td>
                    <td>Administrativo (Datos)</td>
                    <td>Sistemas de Gestión</td>
                    <td rowSpan="3" className="app-cell">
                      El atacante infringió el marco penal <strong>(Ley 21.459)</strong>; Rockstar se expone a multas por fallar en resguardar datos <strong>(GDPR)</strong>; y debió aplicar <strong>ISO 27001</strong> para evitar reincidencias de Ingeniería Social.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Sujeto Regulado</strong></td>
                    <td>Personas naturales</td>
                    <td>Empresas</td>
                    <td>Organizaciones</td>
                  </tr>
                  <tr>
                    <td><strong>Jurisdicción</strong></td>
                    <td>Territorio Nacional</td>
                    <td>Extraterritorial</td>
                    <td>Global</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 2.1.4 RESPONSABILIDADES (Slide 4) */}
        <section className={`report-card ${currentSlide === 4 ? 'active' : 'hidden'}`}>
          <span className="rubric-tag rubric-tag-red">Criterio 2.1.4</span>
          <h2>4. Responsabilidades Legales de los Actores</h2>
          <div className="card-body">
            <div className="actors-grid">
              <div className="actor-box inacap-box">
                <h3>Atacante (Lapsus$)</h3>
                <ul>
                  <li><strong>Penal:</strong> Tipificada por acceso e interceptación ilícita (Art. 1 y 2 Ley 21.459).</li>
                  <li><strong>Civil:</strong> Obligación de indemnizar perjuicios financieros por la caída de acciones.</li>
                </ul>
              </div>
              <div className="actor-box inacap-box">
                <h3>Empresa (Rockstar Games)</h3>
                <ul>
                  <li><strong>Civil:</strong> Contractual frente a inversores por la fuga de propiedad intelectual.</li>
                  <li><strong>Administrativa:</strong> Auditorías y multas por fallas en la resiliencia de control de accesos.</li>
                </ul>
              </div>
              <div className="actor-box inacap-box">
                <h3>Terceros (Contratista)</h3>
                <ul>
                  <li><strong>Administrativa:</strong> Término inmediato de la relación laboral por incumplir el NDA.</li>
                  <li><strong>Civil:</strong> Eventual demanda por negligencia al ignorar protocolos básicos de autenticación.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2.1.5 TRATAMIENTO DE DATOS (Slide 5) */}
        <section className={`report-card ${currentSlide === 5 ? 'active' : 'hidden'}`}>
          <span className="rubric-tag rubric-tag-red">Criterio 2.1.5</span>
          <h2>5. Tratamiento de Datos Personales (Ley 19.628)</h2>
          <div className="card-body">
            <div className="data-classification inacap-box">
              <h3>Clasificación de Datos Comprometidos</h3>
              <ul>
                <li><strong>Datos Personales:</strong> Nombres de usuario, correos electrónicos corporativos e identificadores de Slack.</li>
                <li><strong>Datos Sensibles:</strong> Comunicaciones internas que vulneraron la esfera íntima del desarrollo estratégico y opiniones de los empleados.</li>
              </ul>
            </div>
            <div className="arco-analysis inacap-box">
              <h3>Análisis de Derechos ARCO Afectados</h3>
              <ul>
                <li><strong>Acceso:</strong> El atacante impidió que los titulares validaran el resguardo de su información laboral.</li>
                <li><strong>Cancelación:</strong> Los ingenieros perdieron el control para exigir la eliminación de sus datos tras la publicación en foros.</li>
                <li><strong>Oposición:</strong> Imposibilidad de oponerse al tratamiento de datos de contacto distribuidos globalmente sin consentimiento.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;