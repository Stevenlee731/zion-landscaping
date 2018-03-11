module.exports = {
  siteMetadata: {
    title: 'Zion Landscaping',
    desc: 'Real landscaping ideas and design for your front yard, backyard, and all residential landscaping purposes.'
  },
  pathPrefix: "/zionlandscaping",
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark'
  ],
};
