
'use client'

import Link from "next/link";
import React, { useState } from 'react';



const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (


        <div className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
                 <button onClick={toggleMenu}>Menú</button>

                 {isOpen &&(<div>

                    <span> <Link onClick={toggleMenu} href="/">
                <h4>Home</h4>
            </Link></span>

            <span> <Link onClick={toggleMenu} href="/first">
                <h4>First</h4>
            </Link></span>

            <span> <Link onClick={toggleMenu} href="/second">
                <h4>Second</h4>
            </Link></span>
                    </div>)}
            


        </div>



    )
}

export default NavigationBar


