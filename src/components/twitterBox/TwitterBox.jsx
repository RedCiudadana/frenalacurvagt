import React, { useEffect } from 'react'
import SocialBox from '../socialBox/socialBox'

const TwitterBox = () => {
  useEffect(() => {
    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://platform.twitter.com/widgets.js'
    scriptElement.charset = 'utf-8'
    scriptElement.async = true
    document.body.appendChild(scriptElement)
    return () => {
      document.body.removeChild(scriptElement)
    }
  }, [])

  return (
    <section className="section is-medium section-feature-grey initiatives" style={{ marginBottom: '-70px' }}>
      <div className="container">
        <div className="columns is-vcentered app-side has-text-centered">
          <div className="column">
            <h1 className="title is-1 is-bold is-spaced">¡Infórmate!</h1>
            <p className="subtitle is-5 is-muted">
              Mantente pendiente de todo lo que sucede con Frena La Curva guatemala a través de nuestras distintas redes
              sociales.
            </p>
          </div>
        </div>
        <div className="columns is-vcentered app-side has-text-centered" style={{ marginTop: '10px' }}>
          <SocialBox color="red" size="medium" />
        </div>
      </div>
    </section>
  )
}

export default TwitterBox
