import React from 'react'

import logoOcote from '../images/logos/ocote.png'
import logoGobiernoGuatemala from '../images/logos/gobierno-guatemala.png'
import logoFatica from '../images/logos/fatica.png'

const MediosOficiales = () => (
  <section className="section has-bg-blue-grey section-feature-grey initiatives">
    <div className="container">
      <div className="has-text-centered">
        <h1 className="title is-1 is-bold has-text-light has-text-centered">
          <strong>
            <span className="is-white">
              Conoce los medios oficiales en donde podrás encontrar información verificada
            </span>
          </strong>
        </h1>
        <br />
        <h3 className="subtitle is-white is-3 has-text-centered">Infórmate, cuídate y cuida, participa.</h3>
        <h4 className="subtitle is-white has-text-centered">
          Evitemos la desinformación, los #fakenews, mitos, etc. No todo lo que nos mandan en redes sociales es verdad,
          ¡infórmate! y comparte noticias que informen veracidad, no que inculquen miedo.
          <br />
          <span className="is-white has-text-weight-bold">(Da click en la imagen para ir al sitio.)</span>
        </h4>
        <br />
      </div>
      <div className="columns is-variable is-8">
        <div className="column mb-20 has-text-centered">
          <a target="_blank" title="Agencia Ocote" href="https://www.agenciaocote.com/" rel="noopener noreferrer">
            <br />
            <img alt="Logotipo de Ocote" style={{ maxHeight: '100px' }} src={logoOcote} />
            <br />
            <br />
            <h4 className="subtitle is-extra-padded has-text-light is-5 has-text-centered">Agencia Ocote</h4>
          </a>
        </div>
        <div className="column mb-20 has-text-centered">
          <a
            target="_blank"
            title="Mapa en tiempo real del coronavirus en Guatemala"
            href="http://covid19.gob.gt/index.html"
            rel="noopener noreferrer"
          >
            <img alt="Mapa del coronavirus en Guatemala" style={{ maxHeight: '128px' }} src={logoGobiernoGuatemala} />
            <h4 className="subtitle is-extra-padded has-text-light is-5 has-text-centered">
              Situación del COVID-19 en Guatemala
            </h4>
          </a>
        </div>
        <div className="column mb-20 has-text-centered">
          <a
            target="_blank"
            title="Fática - Agencia Ocote"
            href="https://www.agenciaocote.com/proyectos/factica/"
            rel="noopener noreferrer"
          >
            <img alt="Logotipo de Fática" style={{ maxHeight: '128px' }} src={logoFatica} />
            <h4 className="subtitle is-extra-padded has-text-light is-5 has-text-centered">
              Plataforma de verificación del discurso público, fact-checking y detección de bulos
            </h4>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default MediosOficiales
