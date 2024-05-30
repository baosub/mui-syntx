import { Box } from '@mui/material'
import React from 'react'


const BoxSystemProps = () => {
    return (
        <Box
            height={200}
            width={200}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid grey' }}
        >
            This Box uses MUI System props for quick customization.
        </Box>
    )
}

export default BoxSystemProps
