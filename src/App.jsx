import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Encabezado Institucional Corregido */}
      <header className="academic-header">
        <div className="header-content">
          <span className="course-name">Fundamentos de la Seguridad e Información</span>
          <h1>Análisis de Incidente: Caso Rockstar Games 2022</h1>
          <div className="student-info">
            <span className="badge">Evaluación Avanzada</span>
            <span className="author">Alumno: Draco</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        
        {/* 2.1.1 MARCO NORMATIVO */}
        <section className="report-card">
          <span className="rubric-tag">Criterio 2.1.1</span>
          <h2>1. Marco Normativo Nacional e Internacional</h2>
          <div className="card-body">
            <p>Evaluación de normativas y estándares aplicables al compromiso de activos de información en el desarrollo de GTA VI:</p>
            <div className="norm-grid">
              <div className="norm-item">
                <h3>ISO/IEC 27001 (Internacional)</h3>
                <p><strong>Hecho Concreto:</strong> Falla en el control de acceso y gestión de contratistas. El atacante vulneró la cadena de suministro al comprometer a un desarrollador externo mediante ingeniería social.</p>
              </div>
              <div className="norm-item">
                <h3>NIST SP 800-63B (Internacional)</h3>
                <p><strong>Hecho Concreto:</strong> Directrices de autenticación digital. El incidente expuso la debilidad de las notificaciones push simples al sufrir un ataque de "MFA Fatigue", donde el empleado aprobó el acceso tras múltiples intentos del atacante.</p>
              </div>
              <div className="norm-item">
                <h3>Ley 19.628 (Nacional - Chile)</h3>
                <p><strong>Hecho Concreto:</strong> Protección de la vida privada. La exfiltración de credenciales corporativas, canales de Slack con nombres y correos de la planilla de ingenieros expuso datos personales de los trabajadores sin el consentimiento titular.</p>
              </div>
              <div className="norm-item">
                <h3>GDPR - Art. 32 (Internacional)</h3>
                <p>Regula la seguridad del tratamiento de datos. Aunque el foco fue el código fuente, los entornos comprometidos almacenaban bitácoras e identificadores de usuarios internos del entorno de desarrollo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2.1.2 TIPIFICACIÓN DE DELITOS - LEY 21.459 */}
        <section className="report-card">
          <span className="rubric-tag">Criterio 2.1.2</span>
          <h2>2. Tipificación de Delitos Informáticos (Ley Chile 21.459)</h2>
          <div className="card-body">
            <p>Mapeo de las conductas ejecutadas por el atacante (Lapsus$) bajo la legislación penal informática chilena:</p>
            <table className="legal-table">
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
                  <td>Penaliza al que, con ánimo de apoderarse, usar o conocer la información, acceda a un sistema informático sin autorización.</td>
                </tr>
                <tr>
                  <td>Descarga de 90 videos de la fase alfa de GTA VI y líneas de código fuente.</td>
                  <td><strong>Art. 2: Interceptación ilícita</strong></td>
                  <td>Aplica a la interceptación o captura de transmisiones no públicas de datos informáticos entre sistemas.</td>
                </tr>
                <tr>
                  <td>Secuestro de datos y posterior extorsión en canales públicos pidiendo dinero para no liberar el código fuente.</td>
                  <td><strong>Art. 3: Interferencia de datos</strong> y extorsión</td>
                  <td>Sanciona la alteración, daño o destrucción de datos informáticos que obstruyan el normal funcionamiento de la organización.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 2.1.3 COMPARACIÓN DE MARCOS REGULATORIOS */}
        <section className="report-card">
          <span className="rubric-tag">Criterio 2.1.3</span>
          <h2>3. Comparación de Marcos Regulatorios por Industria</h2>
          <div className="card-body">
            <div className="table-responsive">
              <table className="comparison-table">
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
                    <td>Administrativo (Datos Personales)</td>
                    <td>Sistemas de Gestión (Seguridad)</td>
                    <td rowspan="3" className="app-cell">
                      El atacante infringió el marco penal <strong>(Ley 21.459)</strong>; Rockstar se expone a multas si falló en salvaguardar datos bajo <strong>GDPR</strong>; y debió reestructurar sus políticas internas usando las mejores prácticas de <strong>ISO 27001</strong> para evitar reincidencias de Ingeniería Social.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Sujeto Regulado</strong></td>
                    <td>Personas naturales (Criminales)</td>
                    <td>Empresas que tratan datos</td>
                    <td>Organizaciones (Voluntario)</td>
                  </tr>
                  <tr>
                    <td><strong>Jurisdicción</strong></td>
                    <td>Territorio Nacional de Chile</td>
                    <td>Extraterritorial (U.E. y clientes)</td>
                    <td>Global (Estándar de Industria)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 2.1.4 RESPONSABILIDADES LEGALES */}
        <section className="report-card">
          <span className="rubric-tag">Criterio 2.1.4</span>
          <h2>4. Matriz de Responsabilidades Legales de los Actores</h2>
          <div className="card-body">
            <div className="actors-grid">
              <div className="actor-box">
                <h3>Atacante (Lapsus$)</h3>
                <ul>
                  <li><strong>Responsabilidad Penal:</strong> Tipificada penalmente por acceso e interceptación ilícita (Art. 1 y 2 Ley 21.459).</li>
                  <li><strong>Responsabilidad Civil:</strong> Obligación de indemnizar perjuicios financieros por la caída de acciones de Take-Two Interactive.</li>
                </ul>
              </div>
              <div className="actor-box">
                <h3>Empresa (Rockstar Games)</h3>
                <ul>
                  <li><strong>Responsabilidad Civil:</strong> Contractual frente a inversores por la fuga de propiedad intelectual crítica.</li>
                  <li><strong>Responsabilidad Administrativa:</strong> Auditorías obligatorias y multas de entes reguladores por fallas en la resiliencia de control de accesos.</li>
                </ul>
              </div>
              <div className="actor-box">
                <h3>Terceros (Contratista Comprometido)</h3>
                <ul>
                  <li><strong>Responsabilidad Administrativa:</strong> Término inmediato de la relación laboral o comercial por incumplimiento de las políticas de confidencialidad (NDA).</li>
                  <li><strong>Responsabilidad Civil:</strong> Eventual demanda por negligencia si se demuestra el desacato directo de los protocolos básicos de autenticación.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2.1.5 TRATAMIENTO DE DATOS PERSONALES */}
        <section className="report-card">
          <span className="rubric-tag">Criterio 2.1.5</span>
          <h2>5. Tratamiento de Datos Personales (Ley 19.628) y Derechos ARCO</h2>
          <div className="card-body">
            <div className="data-classification">
              <h3>Clasificación de Datos Comprometidos</h3>
              <ul>
                <li><strong>Datos Personales:</strong> Nombres de usuario, correos electrónicos corporativos e identificadores de comunicación interna en Slack.</li>
                <li><strong>Datos Sensibles:</strong> No se identificó fuga de datos médicos o ideológicos, pero las comunicaciones internas vulneraron la esfera íntima del desarrollo estratégico y opiniones de los empleados.</li>
              </ul>
            </div>
            
            <div className="arco-analysis">
              <h3>Análisis de Derechos ARCO Afectados</h3>
              <p>Conforme a la <strong>Ley 19.628</strong> sobre Protección de la Vida Privada, se identifican vulneraciones directas:</p>
              <ul>
                <li><strong>Derecho de Acceso:</strong> El atacante tomó el control de los datos, impidiendo que los legítimos titulares validaran el correcto resguardo de su información laboral en los repositorios expuestos.</li>
                <li><strong>Derecho de Cancelación / Eliminación:</strong> Los ingenieros perdieron el control para exigir la eliminación de sus datos personales e historiales de chat una vez que estos fueron publicados en foros públicos de hacking.</li>
                <li><strong>Derecho de Oposición:</strong> Los empleados se vieron imposibilitados de oponerse al tratamiento de sus datos de contacto y rostros (asociados a las filtraciones de las videollamadas), los cuales fueron distribuidos globalmente sin su consentimiento.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;