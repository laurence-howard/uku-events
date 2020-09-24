import React from "react"
import {
  Grid
} from "@material-ui/core";
import { css } from '@emotion/core';
import Contact from './event/Contact';
import Price from './event/Price';
import Address from './event/Address';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { hasDetails } from './utils';

export default ({pageContext: {data}}) => {
  return (<Layout>
    <SEO title={data.uku_title} />
    <h1>{data.uku_title}</h1>
    <h2
      css={css`
        margin-bottom: 25px;
        font-size: 22px;
        `}
        >{data.startDate}{data.endDate ? ` - ${data.endDate}` : '' }</h2>
    <Grid container>
      {hasDetails(data) ? 
        null :
        <Grid item xs={12} sm={4}>
          <div
            css={theme => css`
            background-color: ${theme.colors.lgrey};
            padding: 20px;
            `}
          >
          <Contact
            email={data.uku_event_contact.uku_event_contact_email}
            name={data.uku_event_contact.uku_event_contact_name}
            number={data.uku_event_contact.uku_event_contact_number_primary}
            />
          <Price 
            amount={data.uku_event_price}
            />
          <Address 
            street={data.uku_event_location.uku_event_street_address}
            city={data.uku_event_location.uku_event_city}
            county={data.uku_event_location.uku_event_county}
            post_code={data.uku_event_location.uku_event_post_code}
            />
          </div>
        </Grid>
        }
      <Grid item sm={hasDetails(data) ? 12 : 8}>
        <div
          css={css`
            padding: 20px;
          `}
        >
          <h4>Description</h4>
          <p dangerouslySetInnerHTML={{ __html: data.uku_event_details }} />
        </div>
      </Grid>
    </Grid>
  </Layout>
)}