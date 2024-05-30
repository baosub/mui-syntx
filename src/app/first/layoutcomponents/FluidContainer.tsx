import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import React from 'react'

function FluidContainer() {
    return (
        <>
        <h4>Fluid Container</h4>
        <Container >
                <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} ><p>Justa a Container</p></Box>
            </Container>



            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} ><p>MaxWidth="sm"</p></Box>
            </Container>
            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} ><p>MaxWidth="md"</p></Box>
            </Container>

            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} ><p>MaxWidth="lg"</p></Box>
            </Container>

            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} ><p>MaxWidth="xl"</p></Box>
            </Container>

        </>
    )
}

export default FluidContainer
