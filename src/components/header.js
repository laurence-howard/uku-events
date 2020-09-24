import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container } from '@material-ui/core'
import { css } from '@emotion/core'
import frisbee from '../images/frisbee.png'

const Header = ({ siteTitle }) => (
  <header>
    <Container maxWidth="md">
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        `}
      >
        <div>
          <Link to="/">
            <div
              css={css`
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              <img 
                src={frisbee}
                css={css`
                  width: 30px;
                  margin-bottom: 0;
                  margin-right: 5px;
                `}  
              />
              <h3
                css={theme => css`
                  margin-bottom: 0;
                  color: ${theme.colors.black};
                  font-size: 18px;
                `}
              >
                Ultimate Tournaments UK
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
