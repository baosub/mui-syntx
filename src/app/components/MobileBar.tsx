'use client'
import Link from 'next/link';
import './FullScreenMenu.css';
import { useState } from "react"

const pages = [
    { title: 'Home', path: '/' },
    { title: 'First', path: '/first' },
    { title: 'Second', path: '/second' },

];


const MobileBar = () => {
    const [open, setOpen] = useState(false);



    const toggleMenu = () => {
        setOpen(!open);
    }
    return (
        <div>
            <header className="app-bar">
                <button className="menu-button" onClick={toggleMenu}>
                    ☰
                </button>

            </header>
            {open && (
                <div className="full-screen-menu">
                    <button className="close-button" onClick={toggleMenu}>
                        ✕
                    </button>
                    <ul className="menu-list">

                        {
                            pages.map((page) => (

                                <li className="menu-item" key={page.title}>
                                    <Link onClick={toggleMenu} style={{ textDecoration: 'none', padding: '5px' }} href={page.path}>{page.title}</Link>


                                </li>

                            ))
                        }





                    </ul>
                </div>
            )}
        </div>
    )
}

export default MobileBar
