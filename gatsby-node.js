const path = require(`path`);
const R = require('ramda');
const moment = require('moment');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pagesData = await graphql(`
    query allEventsQuery {
      allEvents(sort: {order: ASC, fields: startDate}) {
        edges {
          node {
            id
            uku_title
            startDate(formatString: "Do MMM YYYY")
            endDate(formatString: "Do MMM YYYY")
            EventsId
            isCancelled
            uku_date
            uku_event_accomodation_transport
            uku_event_details
            uku_event_contact {
              uku_event_contact_email
              uku_event_contact_name
              uku_event_contact_number_primary
            }
            uku_event_location {
              uku_event_city
              uku_event_country
              uku_event_post_code
              uku_event_street_address
            }
            uku_event_please_bring
            uku_event_price
            uku_link
          }
        }
      }
    }
  `)

  const dates = R.filter(
    ({node}) => moment(node.startDate, "Do MMM YYYY").isSameOrAfter(moment()),
    pagesData.data.allEvents.edges
  )

  dates.forEach(({ node }) => {
    createPage({
      path: '/event/' + node.EventsId,
      component: path.resolve(`./src/templates/event.js`),
      context: {
        slug: node.EventsId,
        data: node
      },
    })
  })

}