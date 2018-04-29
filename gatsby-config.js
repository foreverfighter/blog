module.exports = {
  siteMetadata: {
    title: `yisheng's blog`,
  },
plugins : [
  'gatsby-plugin-react-helmet', 
  `gatsby-plugin-glamor`,
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`
    }
  },
],
pathPrefix : `/project-name`,
}
