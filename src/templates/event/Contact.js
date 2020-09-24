import React from 'react'
import { css } from '@emotion/core';
import DetailsWrapper from '../../components/DetailsWrapper'

const Contact = ({ email, name, number }) => <DetailsWrapper
  values={[email, name, number]}
>
  <div>
    <h4>Contact</h4>
    <p>{email}</p>
    <p dangerouslySetInnerHTML={{ __html: name }} />
    <p>{number}</p>
  </div>
</DetailsWrapper>

export default Contact;