// environment variable setup
let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const path = require('path')

module.exports = {
  plugins: [
    /**
     * SEO
     */ 
    `gatsby-plugin-react-helmet`,
    /**
     * CSS Processing
     */
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: require.resolve(`./src/utils/typography`),
      }
    },
    /**
     * File System Sourcing
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.resolve(`content/assets`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`content/events`),
        name: "events",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`content/pages`),
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`content/settings`),
        name: "settings",
      },
    },
    /**
     * Markdown Transformer
     */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: false,
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                exclude: [
                  "Reddit",
                  "CodePen",
                  "Flickr",
                  "Instagram",
                  "Twitch",
                  "Twitter"
                ]
              }
            }
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `assets` // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
            },
          },
        ]
      }
    },
    /**
     * Netlify CMS
     */
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: require.resolve(`./src/cms/cms.js`),
      },
    },   
    /**
     * Image Processing
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
