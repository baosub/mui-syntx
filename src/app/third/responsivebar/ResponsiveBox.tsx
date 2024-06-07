import { Box } from '@mui/material'
import React from 'react'

const ResponsiveBox = () => {
    return (
        <Box sx={{ bgcolor: 'lightyellow' }}>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Box>
                    mobile
                </Box>


            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Box>
                    desktop


                </Box>


            </Box>




        </Box>
    )
}

export default ResponsiveBox
