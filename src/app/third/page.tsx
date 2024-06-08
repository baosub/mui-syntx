'use client'

import { Container, Typography } from '@mui/material'
import React from 'react'
import ResponsiveNav from './responsivebar/ResponsiveNav'
import ResponsiveBox from './responsivebar/ResponsiveBox'
import Amenu from './responsivebar/Amenu'
import AnotherResponsiveBar from './responsivebar/AnotherResponsiveBar'

const page = () => {
  return (
    <Container maxWidth='lg'>
    <Typography textAlign='center' variant='h2' fontWeight={1000}>Responsive design with sx property</Typography>
    <ResponsiveNav/>
    <ResponsiveBox/>
    <Amenu/>
    <AnotherResponsiveBar/>
      
    </Container>
  )
}

export default page

