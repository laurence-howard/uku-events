require("dotenv").config({
  AWS_ACCESS_KEY: `.env.${process.env.AWS_ACCESS_KEY}`,
  AWS_CUSTOM_SECRET_ACCESS_KEY: `.env.${process.env.AWS_CUSTOM_SECRET_ACCESS_KEY}`,
  AWS_CUSTOM_REGION: `.env.${process.env.AWS_CUSTOM_REGION}`,
  AWS_TABLE_NAME: `.env.${process.env.AWS_TABLE_NAME}`,
})

module.exports = {
  siteMetadata: {
    title: `Ultimate Tournaments UK`,
    description: `Home for ultimate tournaments in the UK`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
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
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/frisbee.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-dynamodb',
      options: {
        typeName: 'Events',
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_CUSTOM_SECRET_ACCESS_KEY,
        region: process.env.AWS_CUSTOM_REGION,
        params: {
          TableName: process.env.AWS_TABLE_NAME,
        }
      }
    },
  ],
}
