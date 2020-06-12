module.exports = {
  siteMetadata: {
    title: `Frena la curva Guatemala`,
    description: `Guía de iniciativas ciudadanas frente al COVID19 para visibilizar, difundir y multiplicar el impacto de proyectos e iniciativas que han brotado en Guatemala`,
    author: `RedCiudadana`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trakingId: `UA-129113306-3`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `FrenaLaCurvaGT`,
        start_url: `/`,
        background_color: `#E83F4E`,
        theme_color: `#E83F4E`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-eslint`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
