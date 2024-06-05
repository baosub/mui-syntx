import { Container, Typography } from '@mui/material'
import React from 'react'
import FlexContainer from './flexboxcomponents/FlexContainer'
import FlexDirectionProp from './flexboxcomponents/FlexDirectionProp'

const page = () => {
  return (

    <Container>
      <Typography variant='h2'>Second (flexBox con mui)</Typography>

      <FlexContainer/>
      parent prop flex direction
      <FlexDirectionProp/>


    </Container>



  )
}

export default page
