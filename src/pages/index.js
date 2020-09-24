import React from "react"
import { graphql } from "gatsby"
import moment from "moment"
import {
  groupBy,
  compose,
  converge,
  identity,
  map,
  sort,
  pick,
  tap,
  keys,
  filter,
  mapObjIndexed,
} from "ramda"
import HomeGrid from '../components/home/HomeGrid';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from '@emotion/core'

const IndexPage = ({data }) => {
  const datesAfterToday = filter(
    ({node}) => moment(node.startDate, "Do MMM YYYY").isSameOrAfter(moment()),
    data.allEvents.edges
  );
  const sortedEvents = compose(
    (x) => Object.entries(x).map(([key, value]) => ({ key, value })),
    converge(pick, [
      compose(
        sort(x => {
          if(moment(x, 'MMMM YY').isSameOrAfter(moment(x, 'MMMM YY'))){
            return 1
          } 
          return -1
        }),
        keys
      ),
      identity
    ]),
    groupBy(({ node: {startDate }}) => {
      const parsedDate = moment(startDate, "Do MMM YYYY");
      return parsedDate.format('MMMM YY');
    })
  )(datesAfterToday)
return (
  <Layout>
    <SEO title="Home" />
    <section
      css={css`
        text-align: center;
      `}
    >
      <h1
        css={css`
          font-size: 35px;
        `}
      >Ultimate Tournaments UK</h1>
      <p>All of these events have been collected from the UKU website.</p>
    </section>
    <HomeGrid events={sortedEvents} />
  </Layout>
)
}

export default IndexPage

export const query = graphql`
query allEventsQuery {
  allEvents(sort: {order: ASC, fields: startDate}) {
    edges {
      node {
        id
        uku_title
        startDate(formatString: "Do MMM YYYY")
        endDate(formatString: "Do MMM YYYY")
        EventsId
      }
    }
  }
}

`
