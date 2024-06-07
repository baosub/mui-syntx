import React from 'react'
import Link from "next/link";
import { AppBar, Box } from '@mui/material';



const NavigationBar = () => {
    return (
        <AppBar>
            <Box sx={{display: 'flex'}}>
                <Box component={Link} href="/">
                    <h4>Home</h4>
                </Box>

                <Box component={Link} href="/first">
                    <h4>First</h4>
                </Box>

                <Box component={Link} href="/second">
                    <h4>Second</h4>
                </Box>


            </Box>




        </AppBar>
    )
}

export default NavigationBar
