import React from 'react'
import DetailsWrapper from '../../components/DetailsWrapper'

const Price = ({ amount }) => <DetailsWrapper
  values={[amount]}
>
  <h4>Price</h4>
  <p>£{amount}</p>
</DetailsWrapper>

export default Price;