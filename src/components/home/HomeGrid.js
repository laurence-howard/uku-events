import React from 'react'
import { Link } from 'gatsby'
import { Grid, Button } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import { css } from "@emotion/core"

const WhiteButton = withStyles((theme) => ({
  root: {
    backgroundColor: 'white',
  },
}))(Button);

const HomeGrid = ({events}) => <Grid container>
  {events.map(({ key, value }) =>
    <Grid item xs={12}>
      <h1
        css={css`
              margin: 20px 0 15px;
            `}
      >{key}</h1>
      <Grid container spacing={2}>
        {value.map(({ node: { uku_title, startDate, endDate, EventsId } }) =>
          <Grid item xs={12} sm={6} md={4}>
            <div
              css={theme => css`
                    box-shadow:  3px 3px 6px -2px #7f7878b0;
                    background-color: ${theme.colors.lgrey};
                    padding: 10px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                  `}
            >
              <p
                css={css`
                    margin-bottom: 6px;
                    `}
              >{startDate}{endDate ? ` - ${endDate}` : ''}</p>
              <h4
                css={css`
                    margin-bottom: 20px;
                    `}
              >{uku_title}</h4>
              <div
                css={css`
                    margin-top: auto;
                    `}
              >
                <Link to={`/event/${EventsId}`}>
                  <WhiteButton variant="outlined" size="small">See More</WhiteButton>
                </Link>
              </div>
            </div>
          </Grid>
        )}
      </Grid>
      <hr
        css={theme => css`
          background-color: ${theme.colors.black};
          opacity: 0.2;
          width: 90%;
          height: 2px;
          margin-bottom: 0;
          margin: 20px auto 0 auto;
        `}
      />
    </Grid>
  )}
</Grid>

export default HomeGrid;