'use client'
import React, { useState } from 'react';
import { Box, Drawer, List, ListItem } from '@mui/material';
import Link from 'next/link';


const pages = [
    { title: 'Home', path: '/' },
    { title: 'First', path: '/first'},
      {title: 'Second', path: '/second'},
     
  ];


const MobileBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
     <button onClick={toggleMenu}>Menu</button>
      <Drawer  anchor="left" open={isOpen} onClose={toggleMenu}>
        <List>
            {
                pages.map((page)=>(
                    <ListItem key={page.title}>
                        <Box onClick={toggleMenu} component={Link} href={page.path}>{page.title}</Box>
                    </ListItem>
                ))
            }


        </List>
      </Drawer>
      
    </>
  )
}

export default MobileBar

