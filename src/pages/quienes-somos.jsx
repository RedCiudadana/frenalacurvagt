import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroAcercaDe from '../components/heroAcercaDe/heroAcercaDe'

import estrategiaImg from '../images/illustrations/FLC-MX_QuienesSomos_Estrategia.svg'

const QuienesSomos = () => (
  <Layout>
    <SEO title="Quiénes somos" />
    <HeroAcercaDe />
    <section className="section">
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column">
            <div className="content readable">
              <p className="has-text-weight-semibold is-uppercase">Nuestro objectivo</p>
              <h2 className="title is-size-2">Prevenir para actuar</h2>
              <p>
                Nuestro objetivo en guatemala es mantener a las personas sanas el mayor tiempo posible (en la salud y en
                lo económico/laboral). Trabajando en equipo podemos cerrar la brecha que existe entre la capacidad
                instalada de los servicios de salud y el pico de pacientes con Covid-19.
              </p>
              <figure className="image">
                <img src={estrategiaImg} alt="Ciclo de acciones prevenir para actuar" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column">
            <div className="content readable">
              <p className="has-text-weight-semibold is-uppercase">
                ¿Cómo funciona el Mapa Frena La Curva Centroamérica y Caribe?
              </p>
              <p>
                El Mapa Frena La Curva Centroamérica y Caribe crea un espacio virtual de solidaridad en el cual
                visibiliza a un segmento de la sociedad que necesita ayuda en tiempo de crisis o bien ofrece de manera
                voluntaria o comercial, sus actividades en las áreas de bienes y servicios en medio de la situación de
                emergencia que afronta la región, la inclusión de actividades no tiene costo. Además, permite visualizar
                servicios de emergencia cercanos a tu localidad, como hospitales o centros de salud.
              </p>
              <p>
                Para iniciar a incluir las iniciativas de Guatemala en el mapa, te invitamos a que nos compartas el
                nombre de tu proyecto, ubicación, breve descripción e información de contacto (correo electrónico,
                teléfono, etc.) y así podamos empezar a ser visibles las iniciativas y encontrar voluntarios o donantes
                para que colaboren activamente con ellas.
              </p>
              <p>
                Puedes ingresar tu iniciativa{' '}
                <a className="has-text-red has-text-weight-bold" href="www.frenalacurva.net">
                  directamente en el mapa
                </a>{' '}
                {/* o contactarnos aqui. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default QuienesSomos
