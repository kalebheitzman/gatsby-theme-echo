const path = require("path")
const slugify = require("slugify")

module.exports = async ({ actions, graphql }) => {

  const PER_PAGE = 10

  const GET_EVENTS = `
  query GET_EVENTS($limit: Int, $skip: Int) {
    events:allMarkdownRemark(
      filter: {
        frontmatter: {template: {eq: "event"}}
      }, 
      limit: $limit, 
      skip: $skip, 
      sort: {
        fields: frontmatter___eventInformation___startTime, 
        order: DESC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        pageCount
      }
    }
  }
  `

  const { createPage } = actions
  const allEvents = []
  const eventPages = []
  let pageNumber = 0

  const fetchEvents = async variables => {
    await graphql(GET_EVENTS, variables).then(({ data }) => {
      
      const {
        events: {
          edges,
          pageInfo: {
            currentPage,
            hasNextPage,
            pageCount
          }
        },

      } = data

      const nodeIds = edges.map(({node}) => node.id)
      const eventsTemplate = require.resolve(`../src/templates/events.js`)
      const eventsPagePath = variables.skip === 0 ? '/' : `/events/${pageNumber+1}`

      eventPages[pageNumber] = {
        path: eventsPagePath,
        component: eventsTemplate,
        context: {
          currentPage: currentPage,
          numPages: pageCount,
          ids: nodeIds,
          pageNumber: pageNumber,
          hasNextPage: hasNextPage,
          skip: variables.skip,
          limit: variables.limit
        },
        ids: nodeIds
      }

      edges.map(({ node }) => {
        allEvents.push(node)
      })

      if (hasNextPage) {
        pageNumber++
        let skipVal = currentPage*variables.limit
        return fetchEvents({ limit: variables.limit, skip: skipVal })
      }
    })
  }

  await fetchEvents({ limit: PER_PAGE, skip: 0 }).then(() => {
    const eventTemplate = require.resolve(`../src/templates/event.js`)

    console.log('createing events pages')
    eventPages.map(eventPage => {
      console.log(`[page] ${eventPage.path}`)
      createPage(eventPage)
    })

    console.log('creating events')
    allEvents.map((event, index) => {
      let eventPath = `event/${slugify(event.frontmatter.title, { lower: true })}/`
      console.log(`[event] ${eventPath}`)
      createPage({
        path: eventPath,
        id: event.id,
        component: eventTemplate,
        context: {
          id:  event.id,
        }
      })
    })
  })

}