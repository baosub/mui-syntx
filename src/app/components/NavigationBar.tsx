import React from 'react'
import Link from "next/link";


const NavigationBar = () => {
    return (
        <>

            <span> <Link href="/">
                <h4>Home</h4>
            </Link></span>

            <span> <Link href="/first">
              <h4>First</h4> 
            </Link></span>

            <span> <Link href="/second">
                <h4>Second</h4>
            </Link></span>


        </>
    )
}

export default NavigationBar
