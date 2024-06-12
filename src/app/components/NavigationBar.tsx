'use client'
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';





const NavigationBar = () => {
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
   
  
    return (
        <>
         <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Box component={Link} href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>Home</Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box component={Link} href="/first" sx={{ textDecoration: 'none', color: 'inherit' }}>First</Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box component={Link} href="/second" sx={{ textDecoration: 'none', color: 'inherit' }}>Second</Box>
              </MenuItem>
              
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
            <Box component={Link} href="/" sx={{ textDecoration: 'none', color: 'inherit', marginRight: theme.spacing(2) }}>Home</Box>
            <Box component={Link} href="/first" sx={{ textDecoration: 'none', color: 'inherit', marginRight: theme.spacing(2) }}>First</Box>
            <Box component={Link} href="/second" sx={{ textDecoration: 'none', color: 'inherit', marginRight: theme.spacing(2) }}>Second</Box>
            
          </Box>
        )}
      </Toolbar>
    </AppBar>
        




{/*
<span> <Link href="/">
                <h4>Home</h4>
            </Link></span>

            <span> <Link href="/first">
              <h4>First</h4> 
            </Link></span>

            <span> <Link href="/second">
                <h4>Second</h4>
            </Link></span> */}
            


        </>
    )
}

export default NavigationBar
