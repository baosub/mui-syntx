import { Box } from '@mui/material'
import React from 'react'
import NavigationBar from './NavigationBar'


const ResponsiveBar = () => {
  return (
    <Box>
        <Box sx={{display:{xs: 'flex', md: 'none'}}}>
            Mobil
        </Box>
        <Box sx={{display:{xs: 'none', md: 'flex'}}}>
            <NavigationBar/>
        </Box>
      
    </Box>
  )
}

export default ResponsiveBar
