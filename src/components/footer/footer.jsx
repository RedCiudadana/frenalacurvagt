import React from 'react'
import SocialBox from '../socialBox/socialBox'
import './footer.scss'

import logoImg from '../../images/logos/logo_footer.png'
import logoRedCiudadana from '../../images/logos/logo-rc-white.png'

const Footer = () => (
  <footer
    className="footer footer-dark fullBox diagonalBox has-text-white"
    // TODO: Move these rules into a better implementation
    style={{
      backgroundColor: '#fbfbfb',
      fontFamily: "'Roboto', sans-serif",
    }}
  >
    <div className="container">
      <div className="columns" style={{ marginTop: '70px' }}>
        <div className="column is-one-quarter">
          <div className="footer-logo">
            <img
              style={{
                height: '150px',
                width: '150px',
                marginTop: '60px',
              }}
              src={logoImg}
              alt="logo frena la curva guatemala"
            />
          </div>
        </div>
        <div style={{ marginTop: 'auto' }} className="column is-two-fifths">
          <div className="footer-column">
            <div className="footer-header">
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '2px' }}>frenalacurva.org.gt</h3>
            </div>
            <p style={{ fontSize: '14px' }}>
              frenalacurva.org.gt una red de apoyo de personas voluntarias que conecta esfuerzos de y acciones
              ciudadanas para aplanar la curva y mitigar los efectos del COVID-19 en guatemala. Forma parte de{' '}
              <a className="has-text-white has-text-weight-bold" href="http://frenalacurva.net/">
                FrenaLaCurva.Net
              </a>{' '}
              que está bajo una{' '}
              <a className="has-text-white has-text-weight-bold" href="http://creativecommons.org/licenses/by/2.0/es/">
                licencia de Creative Commons Reconocimiento 2.0 España
              </a>
              .
            </p>
          </div>
        </div>
        <div style={{ marginTop: 'auto' }} className="column">
          <div className="footer-column level-right">
            <div className="footer-header">
              <nav className="level">
                <div className="level-right">
                  <SocialBox className="level-item" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ height: '1px' }} />
      <div className="level Footer-navbar">
        <div className="level-left">
          <a className="has-text-white level-item" href="/">
            INICIO
          </a>
          <a className="has-text-white level-item" href="https://ca.mapa.frenalacurva.net/views/map">
            MAPA
          </a>
        </div>
        <div className="level-right">
          <a className="has-text-white" href="https://www.facebook.com/Frenalacurvagt">
            FRENA LA CURVA guatemala © 2020
          </a>
        </div>
      </div>
      <div className="level Footer-navbar">
        <div className="level-left">
          <p className="has-text-white level-item">
            Un proyecto con el apoyo de
            <a href="https://redciudadana.org/">
              <img
                style={{
                  height: '40px',
                  width: 'auto',
                  marginLeft: '10px',
                  marginRight: '10px',
                }}
                src={logoRedCiudadana}
                alt="Logo de Red Ciudadana"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
