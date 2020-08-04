module.exports = {
  siteMetadata: {
    title: `Michael Manhard's Portfolio`,
    description: `I'm Michael Manhard, a software engineer from Chicago. You can learn more about me on this site.`,
    author: `Michael Manhard`,
  },
  plugins: [
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "mmanhard.com",
        acl: null,
      },
    },
  ],
}
