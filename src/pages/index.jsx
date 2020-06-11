import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MediosOficiales from '../components/mediosOficiales'
import TwitterBox from '../components/twitterBox/TwitterBox'
import MainHero from '../components/mainHero'

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <MainHero />
    <MediosOficiales />
    <TwitterBox />
  </Layout>
)
export default IndexPage
