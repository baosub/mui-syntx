import { AppBar, Box } from '@mui/material'
import React from 'react'



const ResponsiveNav = () => {
  return (
    <>
    <AppBar>
        <Box sx={{ display:{ xs: 'none', md: 'flex'}}}>
            desktop menu

        </Box>
        <Box sx={{display:{xs: 'flex', sm: 'none'}}}>

            menu mobile
        </Box>

        
    </AppBar>
    
      
    </>
  )
}

export default ResponsiveNav
