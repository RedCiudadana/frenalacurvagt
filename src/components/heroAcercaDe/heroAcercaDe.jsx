import React from 'react'

import './heroAcercaDe.scss'
import logoSquareWhite from '../../images/logos/logo_footer.png'

export default function HeroAcercaDe() {
  return (
    <>
      <div className="hero is-primary HeroAcercaDe">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-5">
                <figure className="image">
                  <img
                    className="HeroAcercaDe-heroImage"
                    src={logoSquareWhite}
                    width={360}
                    height={450}
                    alt="Logo Frena la curva guatemala"
                  />
                </figure>
              </div>
              <div className="column is-7">
                <div className="content">
                  <h1 className="title is-size-1">¿Qué es frena la curva?</h1>
                  {/* <h2 className="subtitle is-size-3">
                    RED CIUDADANA DE SOLIDARIDAD, de cuidados, información, inovación social y resiliencia cívica
                    contral el #COVID19
                  </h2> */}
                  <p>
                    Frena la curva es el repositorio de iniciativas ciudadanas iniciado en España frente al coronavirus,
                    que busca reunir innovación social y resiliencia cívica en tiempos de pandemia
                    <a className="has-text-white has-text-weight-bold" href="www.frenalacurva.net">
                      &nbsp;www.frenalacurva.net
                    </a>
                  </p>
                  <p>
                    Diversos países de América Latina y Europa se han ido agrupando para replicar esta experiencia,
                    desarrollando sus propias plataformas, las cuales responden a las necesidades específicas de cada
                    territorio y son gestionadas por equipos locales, manteniendo canales de comunicación y colaboración
                    entre países. Así nace la Red Internacional Frena la curva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="DiagonalSpacer" />
    </>
  )
}
