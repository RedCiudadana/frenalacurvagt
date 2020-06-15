import React from 'react'

import frenaLaCurvaImg from '../images/logos/imagen-mockups.png'

const MainHero = () => (
  <div className="hero-body">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-7 is-offset-1">
          <figure className="image">
            <img src={frenaLaCurvaImg} alt="Frena La Curva Guatemala" />
          </figure>
        </div>
        <div className="column is-3 landing-caption">
          <h1 className="title is-1 is-bold is-spaced">
            Frena <br />
            la curva
            <br />
            Guatemala
          </h1>
          <h2 className="subtitle is-5 is-muted">
            Te damos la bienvenida a FrenalaCurvaGuatemala una iniciativa de movilización ciudadana para apoyarnos entre
            todos durante la cuarentena del Covid-19.
          </h2>

          <div className="button-wrap has-text-centered">
            <a href="https://ca.mapa.frenalacurva.net/views/map" className="button cta is-rounded primary-btn raised">
              MAPA
            </a>
          </div>
          <h3 className="subtitle mt-20 is-5">
            Vista nuestro mapa y usalo para:
            <ul className="list-circle-arrow">
              <li>Solicitar apoyo a personas de tu comunidad.</li>
              <li>Conocer quiénes necesitan ayuda cerca de donde vives.</li>
              <li>Visibilizar tu negocio u organización si ofreces servicio o atención especializada.</li>
            </ul>
          </h3>
        </div>
      </div>
      <div className="columns is-vcentered has-text-centered" style={{ marginTop: '30px', marginBottom: '30px' }}>
        <div className="column is-12">
          <h1 className="title is-3 is-bold is-spaced">¿Quieres ayudarnos?</h1>
          <h2 className="subtitle is-5 is-muted">
            ¡Inscríbete al <strong>voluntariado</strong> y ayúdanos a frenar la curva!
          </h2>
          <a href="/contactanos" className="button cta is-rounded primary-btn raised is-uppercase mt-20">
            Quiero unirme
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default MainHero
