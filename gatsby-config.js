module.exports = {
  siteMetadata: {
    title: 'Gatsby-test',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typography',

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },


  ]
}
