
import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core'
import twitter from '../images/twitter.png'
import github from '../images/github.png'

const Footer = () => (
  <footer
    css={css`
      margin-top: 20px;
      margin-bottom: 10px;
      text-align: center;
    `}
  >
    <p
      css={css`
        margin-bottom: 0;
      `}
    >Ultimate Tournaments UK built by Laurence Howard</p>
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin-top: 8px;
        img {
          width: 20px;
          margin: 0 3px;
        }
      `}
    >
      <a href="https://twitter.com/laurence_howard"><img src={twitter} /></a>
      <a href="https://github.com/laurence-howard"><img src={github} /></a>
    </div>
  </footer>
)

export default Footer
