'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

type LinkItem = {
    href: string;
    label: string;
  };
  
  const links: LinkItem[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const CustomButton = styled(Button)<{ active: boolean }>(({ active }) => ({
    color: active ? 'red' : 'white',
    background: active ? 'grey' : '',
    marginRight: 15,
  }));
  

const Nav: React.FC = () => {
    const pathname = usePathname();

  return (
    <>
        <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} passHref>
            <CustomButton active={pathname === href}>{label}</CustomButton>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
      
    </>
  )
}

export default Nav
