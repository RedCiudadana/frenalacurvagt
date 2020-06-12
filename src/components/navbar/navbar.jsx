import React, { useState } from 'react'
import { Link } from 'gatsby'

import SocialBox from '../socialBox/socialBox'
import './navbar.scss'
import FLCLogo from '../../images/logos/logo-frena.png'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => setIsActive(!isActive)

  const burgerOnClickHandler = () => toggleActive()

  const activeClassName = 'is-active'

  const isActiveClassnName = isActive ? activeClassName : ''

  return (
    <div className="Navbar-wrapper">
      <div className="container">
        <nav className="navbar Navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img className="Navbar-logo" src={FLCLogo} alt="Logotipo de Frena la curva guatemala" />
            </Link>
            <a
              role="button"
              className={`navbar-burger burger ${isActiveClassnName}`}
              aria-label="menu"
              aria-expanded={isActive}
              onClick={burgerOnClickHandler}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu is-shadowless ${isActiveClassnName}`}>
            <div className="navbar-start">
              <a
                aria-label="menu"
                href="https://ca.mapa.frenalacurva.net/views/map"
                className={'navbar-item is-uppercase'}
              >
                Mapa
              </a>
              <Link
                className="navbar-item is-uppercase"
                activeClassName={activeClassName}
                to="/quienes-somos"
                onClick={toggleActive}
              >
                Quiénes somos
              </Link>
              {/* <Link
                className="navbar-item is-uppercase"
                activeClassName={activeClassName}
                to="/quienes-somos"
                onClick={toggleActive}
              >
                Contacto
              </Link> */}
            </div>
            <div className="navbar-end">
              <SocialBox className="navbar-item" onClick={toggleActive} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
