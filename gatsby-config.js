module.exports = {
  siteMetadata: {
    title: 'Zion Landscaping',
    desc: 'Real landscaping ideas and design for your front yard, backyard, and all residential landscaping purposes.'
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    `gatsby-plugin-react-next`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms'
  ],
};
