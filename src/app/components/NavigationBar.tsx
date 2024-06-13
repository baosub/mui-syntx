

import React from 'react'
import Link from "next/link";
import { AppBar, Box, Container } from '@mui/material';


const pages = [
    { title: 'Home', path: '/' },
    { title: 'First', path: '/first'},
      {title: 'Second', path: '/second'},
     
  ];


const NavigationBar = () => {
   
    return (
        <>
            <AppBar>
                <Container maxWidth='xl'>

                    <Box  sx={{display: 'flex'}}>
                        {
                            pages.map((page)=>(

                                <Box key={page.title}>
                                    <Box  sx={{color: 'white', textDecoration: 'none', padding: '5px'}} component={Link} href={page.path}>{page.title}</Box>


                                </Box>
                                
                            ))
                        }


                    </Box>

                </Container>



            </AppBar>






            {
                /* <span> <Link href="/">
                    <h4>Home</h4>
                </Link></span>
    
                <span> <Link href="/first">
                  <h4>First</h4> 
                </Link></span>
    
                <span> <Link href="/second">
                    <h4>Second</h4>
                </Link></span> */
            }




        </>
    )
}

export default NavigationBar
