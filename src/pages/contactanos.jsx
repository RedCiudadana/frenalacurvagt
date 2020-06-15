import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const departamentos = [
  'Alta Verapaz',
  'Baja Verapaz',
  'Chimaltenango',
  'Chiquimula',
  'Petén',
  'El Progreso',
  'Quiché',
  'Escuintla',
  'Guatemala',
  'Huehuetenango',
  'Izabal',
  'Jalapa',
  'Jutiapa',
  'Quetzaltenango',
  'Retalhuleu',
  'Sacatepéquez',
  'San Marcos',
  'Santa Rosa',
  'Sololá',
  'Suchitepéquez',
  'Totonicapán',
  'Zacapa',
]

const municipios = {
  'Alta Verapaz': [
    'Chahal',
    'Lanquín',
    'San Juan Chamelco',
    'Santa María Cahabón',
    'Tucurú',
    'Chisec',
    'Panzós',
    'San Pedro Carchá',
    'Senahú',
    'Cobán',
    'Raxruhá',
    'Santa Catalina La Tinta',
    'Tactic',
    'Fray Bartolomé de las Casas',
    'San Cristóbal Verapaz',
    'Santa Cruz Verapaz',
    'Tamahú',
  ],
  'Baja Verapaz': [
    'Cubulco',
    'Salamá',
    'Granados',
    'San Jerónimo',
    'Purulhá',
    'San Miguel Chicaj',
    'Rabinal',
    'Santa Cruz el Chol',
  ],
  Chimaltenango: [
    'Acatenango',
    'Patzicía',
    'San José Poaquil',
    'Santa Cruz Balanyá',
    'Chimaltenango',
    'Patzún',
    'San Juan Comalapa',
    'Tecpán',
    'El Tejar',
    'Pochuta',
    'San Martín Jilotepeque',
    'Yepocapa',
    'Parramos',
    'San Andrés Itzapa',
    'Santa Apolonia',
    'Zaragoza',
  ],
  Chiquimula: [
    'Camotán',
    'Ipala',
    'San Jacinto',
    'Chiquimula',
    'Jocotán',
    'San José La Arada',
    'Concepción Las Minas',
    'Olopa',
    'San Juan Ermita',
    'Esquipulas',
    'Quezaltepeque',
  ],
  'El Progreso': [
    'El Jícaro',
    'San Antonio La Paz',
    'Guastatoya',
    'San Cristóbal Acasaguastlán',
    'Morazán',
    'Sanarate',
    'San Agustín Acasaguastlán',
    'Sansare',
  ],
  Escuintla: [
    'Escuintla',
    'La Gomera',
    'San José',
    'Tiquisate',
    'Guanagazapa',
    'Masagua',
    'San Vicente Pacaya',
    'Iztapa',
    'Nueva Concepción',
    'Santa Lucía Cotzumalguapa',
    'La Democracia',
    'Palín',
    'Siquinalá',
  ],
  Guatemala: [
    'Amatitlán',
    'Guatemala',
    'San José Pinula',
    'San Pedro Sacatepéquez',
    'Villa Nueva',
    'Chinautla',
    'Mixco',
    'San Juan Sacatepéquez',
    'San Raymundo',
    'Chuarrancho',
    'Palencia',
    'San Miguel Petapa',
    'Santa Catarina Pinula',
    'Fraijanes',
    'San José del Golfo',
    'San Pedro Ayampuc',
    'Villa Canales',
  ],
  Huehuetenango: [
    'Aguacatán',
    'Cuilco',
    'La Libertad',
    'San Gaspar Ixchil',
    'San Mateo Ixtatán',
    'San Rafael La Independencia',
    'Santa Ana Huista',
    'Santiago Chimaltenango',
    'Chiantla',
    'Huehuetenango',
    'Malacatancito',
    'San Ildefonso Ixtahuacán',
    'San Miguel Acatán',
    'San Rafael Petzal',
    'Santa Bárbara',
    'Tectitán',
    'Colotenango',
    'Jacaltenango',
    'Nentón',
    'San Juan Atitán',
    'San Pedro Necta',
    'San Sebastián Coatán',
    'Santa Cruz Barillas',
    'Todos Santos Cuchumatánes',
    'Concepción Huista',
    'La Democracia',
    'San Antonio Huista',
    'San Juan Ixcoy',
    'San Pedro Soloma',
    'San Sebastián',
    'Santa Eulalia',
    'Unión Cantinil',
  ],
  Izabal: ['El Estor', 'Puerto Barrios', 'Livingston', 'Los Amates', 'Morales'],
  Jalapa: [
    'Jalapa',
    'San Luis Jilotepeque',
    'Mataquescuintla',
    'San Manuel Chaparrón',
    'Monjas',
    'San Pedro Pinula',
    'San Carlos Alzatate',
  ],
  Jutiapa: [
    'Agua Blanca',
    'Conguaco',
    'Jerez',
    'Quesada',
    'Zapotitlán',
    'Asunción Mita',
    'El Adelanto',
    'Jutiapa',
    'San José Acatempa',
    'Atescatempa',
    'El Progreso',
    'Moyuta',
    'Santa Catarina Mita',
    'Comapa',
    'Jalpatagua',
    'Pasaco',
    'Yupiltepeque',
  ],
  Petén: [
    'Dolores',
    'Melchor de Mencos',
    'San Francisco',
    'Sayaxché',
    'Flores',
    'Poptún',
    'San José',
    'La Libertad',
    'San Andrés',
    'San Luis',
    'Las Cruces',
    'San Benito',
    'Santa Ana',
  ],
  Quetzaltenango: [
    'Almolonga',
    'Coatepeque',
    'Flores Costa Cuca',
    'Olintepeque',
    'San Carlos Sija',
    'San Mateo',
    'Cabricán',
    'Colomba',
    'Génova',
    'Palestina de Los Altos',
    'San Francisco La Unión',
    'San Miguel Sigüilá',
    'Cajolá',
    'Concepción Chiquirichapa',
    'Huitán',
    'Quetzaltenango',
    'San Juan Ostuncalco',
    'Sibilia',
    'Cantel',
    'El Palmar',
    'La Esperanza',
    'Salcajá',
    'San Martín Sacatepéquez',
    'Zunil',
  ],
  Quiché: [
    'Canillá',
    'Chichicastenango',
    'Joyabaj',
    'Sacapulas',
    'San Juan Cotzal',
    'Zacualpa',
    'Chajul',
    'Chinique',
    'Nebaj',
    'San Andrés Sajcabajá',
    'San Pedro Jocopilas',
    'Chicamán',
    'Cunén',
    'Pachalum',
    'San Antonio Ilotenango',
    'Santa Cruz del Quiché',
    'Chiché',
    'Ixcán',
    'Patzité',
    'San Bartolomé Jocotenango',
    'Uspantán',
  ],
  Retalhuleu: [
    'Champerico',
    'San Andrés Villa Seca',
    'Santa Cruz Muluá',
    'El Asintal',
    'San Felipe',
    'Nuevo San Carlos',
    'San Martín Zapotitlán',
    'Retalhuleu',
    'San Sebastián',
  ],
  Sacatepéquez: [
    'Alotenango',
    'Magdalena Milpas Altas',
    'San Lucas Sacatepéquez',
    'Santa María de Jesús',
    'La Antigua Guatemala',
    'Pastores',
    'San Miguel Dueñas',
    'Santiago Sacatepéquez',
    'Ciudad Vieja',
    'San Antonio Aguas Calientes',
    'Santa Catarina Barahona',
    'Santo Domingo Xenacoj',
    'Jocotenango',
    'San Bartolomé Milpas Altas',
    'Santa Lucía Milpas Altas',
    'Sumpango',
  ],
  'San Marcos': [
    'Ayutla',
    'El Quetzal',
    'Ixchiguán',
    'Ocós',
    'San Cristóbal Cucho',
    'San Miguel Ixtahuacán',
    'Sibinal',
    'Tejutla',
    'Catarina',
    'El Rodeo',
    'La Reforma',
    'Pajapita',
    'San José Ojetenam',
    'San Pablo',
    'Sipacapa',
    'Comitancillo',
    'El Tumbador',
    'Malacatán',
    'Río Blanco',
    'San Lorenzo',
    'San Pedro Sacatepéquez',
    'Tacaná',
    'Concepción Tutuapa',
    'Esquipulas Palo Gordo',
    'Nuevo Progreso',
    'San Antonio Sacatepéquez',
    'San Marcos',
    'San Rafael Pie de La Cuesta',
    'Tajumulco',
  ],
  'Santa Rosa': [
    'Barberena',
    'Guazacapán',
    'San Juan Tecuaco',
    'Santa Rosa de Lima',
    'Casillas',
    'Nueva Santa Rosa',
    'San Rafaél Las Flores',
    'Taxisco',
    'Chiquimulilla',
    'Oratorio',
    'Santa Cruz Naranjo',
    'Cuilapa',
    'Pueblo Nuevo Viñas',
    'Santa María Ixhuatán',
  ],
  Sololá: [
    'Concepción',
    'San Antonio Palopó',
    'San Marcos La Laguna',
    'Santa Catarina Palopó',
    'Santa María Visitación',
    'Nahualá',
    'San José Chacayá',
    'San Pablo La Laguna',
    'Santa Clara La Laguna',
    'Santiago Atitlán',
    'Panajachel',
    'San Juan La Laguna',
    'San Pedro La Laguna',
    'Santa Cruz La Laguna',
    'Sololá',
    'San Andrés Semetabaj',
    'San Lucas Tolimán',
    'Santa Catarina Ixtahuacan',
    'Santa Lucía Utatlán',
  ],
  Suchitepéquez: [
    'Chicacao',
    'Pueblo Nuevo',
    'San Bernardino',
    'San Juan Bautista',
    'Santa Bárbara',
    'Cuyotenango',
    'Río Bravo',
    'San Francisco Zapotitlán',
    'San Lorenzo',
    'Santo Domingo',
    'Mazatenango',
    'Samayac',
    'San Gabriel',
    'San Miguel Panán',
    'Santo Tomás La Unión',
    'Patulul',
    'San Antonio',
    'San José El Ídolo',
    'San Pablo Jocopilas',
    'Zunilito',
  ],
  Totonicapán: [
    'Momostenango',
    'San Francisco El Alto',
    'San Andrés Xecul',
    'Santa Lucía La Reforma',
    'San Bartolo',
    'Santa María Chiquimula',
    'San Cristóbal Totonicapán',
    'Totonicapán',
  ],
  Zacapa: [
    'Cabañas',
    'La Unión',
    'Usumatlán',
    'Estanzuela',
    'Río Hondo',
    'Zacapa',
    'Gualán',
    'San Diego',
    'Huité',
    'Teculután',
  ],
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactanosPage extends React.Component {
  constructor() {
    super()
    this.state = {
      value: null,
      municipios: [],
      nombre: '',
      correo: '',
      telefono: '',
      horas: '',
      medioContactoPreferido: '',
      departamento: null,
      municipio: '',
      frecuenciaRevisarRedesSociles: '',
      redSocialMasUsada: '',
    }
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        this.setState({
          formMessageResult: 'Gracias! El formulario se envió correctamente',
        })
      })
      .catch(() => {
        this.setState({
          formMessageResult: 'Error al enviar formulario, por favor intenta más tarde',
        })
      })

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const departamentoOptions = departamentos.map(departamento => {
      return (
        <option key={departamento} value={departamento}>
          {departamento}
        </option>
      )
    })

    console.log('options municipios')
    let municipioOptions = []
    if (this.state.departamento !== null && this.state.departamento !== undefined && this.state.departamento !== '') {
      console.log('options municipios accepted')
      console.log(this.state)
      municipioOptions = municipios[this.state.departamento].map(municipio => {
        return (
          <option key={municipio} value={municipio}>
            {municipio}
          </option>
        )
      })
    }

    let {
      nombre,
      correo,
      telefono,
      horas,
      medioContactoPreferido,
      municipio,
      frecuenciaRevisarRedesSociles,
    } = this.state

    return (
      <Layout>
        <SEO title="Contactanos" />
        <section className="section">
          <div className="container">
            <div className="columns has-text-centered">
              <div className="column">
                <div className="content readable">
                  <h2 className="title is-size-2">Contactanos</h2>
                  <p>
                    Frenalacurva.org.gt nace como el capítulo de Guatemala de la Iniciativa Iberoamericana
                    Frenalacurva.net, donde las comunidades se han organizado para apoyar los esfuerzos relacionados con
                    el Covid-19. Con presencia en más de 12 países, FrenaLaCurva está compuesta por voluntarios
                    digitales: ciudadanas y ciudadanos interesados en aportar su tiempo para contribuir a la respuesta,
                    trabajando durante algunas horas y cumpliendo con compromisos.
                  </p>
                  <p>
                    Desde casa todos podemos hacer frente a la pandemia. Si quieres ayudar, puedes donar algo de tu
                    tiempo y tu talento para ayudarnos a frenar la curva.
                  </p>
                  <p>¡Inscríbete como voluntario y ayúdanos a frenar la curva!</p>
                  <form
                    name="contact"
                    method="post"
                    style={{ display: 'grid', textAlign: 'left' }}
                    className="contactForm"
                    onSubmit={this.handleSubmit}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={nombre}
                      required={true}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="correo">Correo electrónico</label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={correo}
                      required={true}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={telefono}
                      placeholder="00000000"
                      pattern="[0-9]{8}"
                      required={true}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="horas">Cuántas hora semanales le puedes dedicar a este proyecto</label>
                    <select name="horas" value={horas} id="horas" required={true} onChange={this.handleChange}>
                      <option disabled value="">
                        Seleccionar
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                    </select>
                    <label htmlFor="medioContactoPreferido">Forma de contacto preferida</label>
                    <select
                      name="medioContactoPreferido"
                      value={medioContactoPreferido}
                      id="medioContactoPreferido"
                      defaultValue=""
                      required={true}
                      onChange={this.handleChange}
                    >
                      <option disabled value="">
                        Seleccionar
                      </option>
                      <option value="email">Correo electrónico</option>
                      <option value="telefono">Teléfono</option>
                    </select>
                    <label htmlFor="departamento">Departamento</label>
                    <select
                      name="departamento"
                      id="departamento"
                      value={this.state.value}
                      required={true}
                      onChange={this.handleChange}
                    >
                      <option disabled value="">
                        Seleccionar
                      </option>
                      {departamentoOptions}
                    </select>
                    <label htmlFor="municipio">Municipio</label>
                    <select
                      name="municipio"
                      value={municipio}
                      id="municipio"
                      defaultValue=""
                      required={true}
                      onChange={this.handleChange}
                    >
                      <option disabled value="">
                        Seleccionar
                      </option>
                      {municipioOptions}
                    </select>
                    <label htmlFor="frecuenciaRevisarRedesSociles">¿Qué tanto usas redes sociales?</label>
                    <select
                      name="frecuenciaRevisarRedesSociles"
                      value={frecuenciaRevisarRedesSociles}
                      id="frecuenciaRevisarRedesSociles"
                      defaultValue=""
                      required={true}
                      onChange={this.handleChange}
                    >
                      <option disabled value="">
                        Seleccionar
                      </option>
                      <option value="Algunas veces al dia">Algunas veces al dia</option>
                      <option value="Un par de veces al dia">Un par de veces al dia</option>
                      <option value="Una vez a la semana">Una vez a la semana</option>
                      <option value="Nunca">Nunca</option>
                    </select>
                    <label>¿Qué redes sociales usas más?</label>
                    <div style={{ marginLeft: '10px', marginBottom: '8px' }}>
                      <div>
                        <input
                          type="radio"
                          id="Twitter"
                          name="redSocialMasUsada"
                          value="Twitter"
                          required={true}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="Twitter" style={{ marginLeft: '10px' }}>
                          Twitter
                        </label>
                        <br />
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="Instagram"
                          name="redSocialMasUsada"
                          value="Instagram"
                          required={true}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="Instagram" style={{ marginLeft: '10px' }}>
                          Instagram
                        </label>
                        <br />
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="Facebook"
                          name="redSocialMasUsada"
                          value="Facebook"
                          required={true}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="Facebook" style={{ marginLeft: '10px' }}>
                          Facebook
                        </label>
                        <br />
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="Whataspp"
                          name="redSocialMasUsada"
                          value="Whataspp"
                          required={true}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="Whataspp" style={{ marginLeft: '10px' }}>
                          Whataspp
                        </label>
                        <br />
                      </div>
                    </div>
                    <br />
                    <p>
                      <button className="button cta is-rounded primary-btn raised is-uppercase mt-20" type="submit">
                        Enviar
                      </button>
                    </p>
                  </form>
                  <h3 className="title is-size-4 is-bold">
                    {this.state.formMessageResult ? this.state.formMessageResult : ''}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ContactanosPage
