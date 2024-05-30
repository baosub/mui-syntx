import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import React from 'react'

const FixedContainer = () => {
    return (
        <>
            <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} ><p>FixedContainer</p></Box>
            </Container>

        </>
    )
}

export default FixedContainer
