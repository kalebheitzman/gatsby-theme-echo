/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createEvents = require('./gatsby/createEvents')

// Create Pages
exports.createPages = async ({ actions, graphql }) => {
    await createEvents({ actions, graphql })
}

// Frontmatter Image files
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
}