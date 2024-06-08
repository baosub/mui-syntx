import { AppBar, Box } from '@mui/material'
import React from 'react'
import Amenu from './Amenu'


const AnotherResponsiveBar = () => {
  return (
   <AppBar position='relative'>

<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Box>
                    mobile menu
                    
                </Box>


            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Box>
                <Amenu/>


                </Box>


            </Box>



   </AppBar>
  )
}

export default AnotherResponsiveBar
