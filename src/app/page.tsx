export default function Home() {
  return (
    <main className="container2" style={{  margin: "0" }}>
      
      {/* HERO */}
      <header style={{ marginBottom: "20px" }}>
        <h1>
          Profesionalizá tu proyecto
        </h1>
      </header>

      {/* SERVICIO 1 */}
      <section className="seccion_1">
        <h2>
          🌐 Presencia digital y páginas web
        </h2>

        <p >
          Diseñamos sitios modernos, rápidos y optimizados para convertir visitas en clientes.
        </p>

        <ul>
          <li>✔ Web institucional</li>
          <li>✔ Landing pages para venta</li>
          <li>✔ Ecommerce y catálogos online</li>
          <li>✔ Diseño Mobile First (celular + PC)</li>
          <li>✔ Integración con WhatsApp y redes</li>
        </ul>
      </section>

      {/* SERVICIO 2 */}
      <section>
        <h2>
          ⚙️ Software y automatización
        </h2>

        <p >
          Transformamos procesos manuales en sistemas simples y eficientes.
        </p>

        <ul>
          <li>✔ Automatización de tareas repetitivas</li>
          <li>✔ Sistemas internos a medida</li>
          <li>✔ Integración con APIs y plataformas</li>
          <li>✔ Digitalización de Excel a aplicaciones reales</li>
          <li>✔ Soluciones para operaciones y gestión</li>
        </ul>
      </section>

      {/* SERVICIO 3 */}
      <section className="seccion_1">
        <h2>
          📊 Datos, dashboards e inteligencia
        </h2>

        <p >
          Convertimos información en decisiones con reportes claros y monitoreo en tiempo real.
        </p>

        <ul>
          <li>✔ Dashboards Power BI y tableros web</li>
          <li>✔ Indicadores y reportes automáticos</li>
          <li>✔ Análisis para empresas industriales</li>
          <li>✔ Modelos predictivos y optimización</li>
        </ul>
      </section>

      {/* SERVICIO 4 */}
      <section style={{ marginBottom: "40px" }}>
        <h2>
          🤝 Consultoría tecnológica
        </h2>

        <p >
          Te ayudamos a elegir e implementar la solución correcta, sin gastar de más.
        </p>

        <ul>
          <li>✔ Asesoramiento estratégico IT</li>
          <li>✔ Arquitectura de sistemas</li>
          <li>✔ Modernización de procesos</li>
          <li>✔ Implementación por etapas</li>
          <li>✔ Soporte continuo</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <footer style={{ padding: "30px", borderTop: "1px solid #ddd" }}>
        <h2 style={{ fontSize: "24px"}}>
          🚀 Trabajemos juntos
        </h2>

        <p style={{ marginBottom: "20px" }}>
          ¿Querés una web que venda, un sistema que ahorre tiempo o una solución tecnológica completa?
        </p>

        <button
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Contactanos
        </button>
      </footer>
    </main>
  );
}