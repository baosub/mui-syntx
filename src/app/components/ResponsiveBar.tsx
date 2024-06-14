import { Box } from '@mui/material'
import React from 'react'
import NavigationBar from './NavigationBar'
import MobileBar from './MobileBar'


const ResponsiveBar = () => {
  return (
    <Box>
        <Box sx={{display:{xs: 'flex', md: 'none'}}}>
            <MobileBar/>
        </Box>
        <Box sx={{display:{xs: 'none', md: 'flex'}}}>
            <NavigationBar/>
        </Box>
      
    </Box>
  )
}

export default ResponsiveBar
