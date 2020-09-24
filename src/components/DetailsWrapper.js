import React from 'react'
import { css } from '@emotion/core'

const DetailsWrapper = ({values, children}) => {
  if(values.indexOf(null) != -1){
    return null
  }
  return <div
    css={css`
      margin-bottom: 15px;
      p {
        margin-bottom: 3px;
      }
      h4 {
        margin-bottom: 10px;
      }
    `}
  >
    {children}
  </div>
}

export default DetailsWrapper