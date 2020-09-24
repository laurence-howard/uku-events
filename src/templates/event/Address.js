import React from 'react'
import DetailsWrapper from '../../components/DetailsWrapper'

const Address = ({ 
  street,
  city,
  county,
  post_code
}) => <DetailsWrapper
  values={[street, city, county, post_code]}
>
  <h4>Address</h4>
  <p>{street}</p>
  <p>{city}</p>
  <p>{county}</p>
  <p>{post_code}</p>
</DetailsWrapper>

export default Address;