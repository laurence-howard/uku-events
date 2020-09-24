/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'emotion-theming'
import { Container } from '@material-ui/core'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./normalize.css"
import "./custom.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = {
    colors: {
      lgrey: '#f0f0f0',
      black: '#2d2a2a'
    }
  }

  return (
    <>
      <ThemeProvider
        theme={theme}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container maxWidth="md">
          <main>{children}</main>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
