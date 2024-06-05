import { Box } from '@mui/material'
import React from 'react'


const FlexContainer = () => {

    const elements = {fontSize: '30px', margin: '10px', padding: '20px', backgroundColor: '#f1f1f1'}

    return (
        <Box sx={{display: 'flex', backgroundColor: 'dodgerblue'}}>

            <Box sx={elements}>
               1 Esto es display: flex
            </Box>

            <Box sx={elements}>
                2 Esto es display: flex
            </Box>

            <Box sx={elements}>
                3 Esto es display: flex
            </Box>




        </Box>
    )
}

export default FlexContainer
